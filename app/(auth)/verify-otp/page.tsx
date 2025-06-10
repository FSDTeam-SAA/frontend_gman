"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const decodedEmail = email ? decodeURIComponent(email) : "";

  useEffect(() => {
    if (!decodedEmail) {
      toast.error("Email is required for OTP verification");
      router.push("/change-password");
    }

    // Start countdown for resend OTP
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [decodedEmail, router]);

  const handleResendOtp = async () => {
    setResendDisabled(true);
    setCountdown(30);

    try {
      // Here you would call your API to resend OTP
      // await resendOtp(decodedEmail)
      toast.success("New OTP sent successfully!");
    } catch {
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (pastedData.length === 6) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      // Here you would verify the OTP with your backend
      // const isValid = await verifyOtp(decodedEmail, otpString)

      // For demo purposes, we'll simulate successful verification
      const isValid = true;

      if (isValid) {
        toast.success("OTP verified successfully!");

        // Store verification data
        sessionStorage.setItem("verifiedOtp", otpString);
        sessionStorage.setItem("otpVerificationTime", new Date().toISOString());
        sessionStorage.setItem("verifiedEmail", decodedEmail);

        // Redirect to password update with email and OTP in query parameters
        router.push(
          `/change-password?email=${encodeURIComponent(
            decodedEmail
          )}&otp=${encodeURIComponent(otpString)}`
        );
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Verification failed. Please try again.");
      console.error("OTP verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const maskEmail = (email: string) => {
    if (!email) return "";
    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) return email;
    const maskedLocal =
      localPart.length > 2
        ? localPart.slice(0, 2) + "*".repeat(localPart.length - 2)
        : localPart;
    return `${maskedLocal}@${domain}`;
  };

  if (!decodedEmail) {
    return (
      <div className="min-h-screen bg-[#1F2022] flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-400">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1F2022] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-[32px] font-semibold text-[#C0A05C]">
            Verify OTP
          </h1>
          <p className="text-[#C0A05C] text-sm">
            We&apos;ve sent a verification code to
            <br />
            <span className="text-[#C0A05C] font-medium">
              {maskEmail(decodedEmail)}
            </span>
            <br />
            Enter the 6-digit code below
          </p>
        </div>

        <div className="bg-[#C0A05C0D] rounded-[8px] p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className="flex justify-center space-x-2"
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center bg-gray-800 border-[#C0A05C] text-[#C0A05C] text-lg font-semibold focus:border-[#C0A05C] focus:ring-1 focus:ring-[#C0A05C] rounded-[8px]"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-[#C0A05C] text-sm">
                {resendDisabled
                  ? `Resend OTP in ${countdown} seconds`
                  : "Enter the 6-digit code sent to your email"}
              </p>
            </div>

            <Button
              type="submit"
              disabled={otp.join("").length !== 6 || isLoading}
              className="w-full text-[#1F2022] font-medium py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(287.15deg, #946329 0%, #F3E898 50%, #946329 100%)",
              }}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-[#C0A05C] text-sm hover:underline transition-colors"
          >
            ← Back to forgot password
          </button>

          <button
            type="button"
            onClick={handleResendOtp}
            disabled={resendDisabled}
            className="text-[#C0A05C] text-sm hover:underline transition-colors disabled:opacity-50"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
