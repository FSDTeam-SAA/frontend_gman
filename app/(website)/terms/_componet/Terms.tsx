import { Card, CardContent } from "@/components/ui/card"

export default function TermsConditions() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className=" container mx-auto">
        <Card className="shadow-none border-none">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-[32px] font-semibold text-[#131313] mb-6">Terms & Conditions</h1>
                <p className="text-[#424242] leading-relaxed">
                  Welcome to Dimond. By accessing and using our website dripswag.com and purchasing our products, you
                  agree to comply with and be bound by the following terms and conditions. Please read these Terms
                  carefully. If you do not agree to these Terms, please do not use the Site or make a purchase.
                </p>
              </div>

              {/* Eligibility */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Eligibility</h2>
                <p className="text-[#424242] leading-relaxed">
                  You must be at least 18 years old and legally able to enter into contracts to use our Site. By using
                  the Site, you represent and warrant that you meet these eligibility requirements.
                </p>
              </section>

              {/* Account Registration */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Account Registration</h2>
                <p className="text-[#424242] leading-relaxed mb-3">
                  To participate in auctions and place bids, you must create an account on our Site. When registering,
                  you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>Provide accurate and complete information during the registration process.</li>
                  <li>
                    Maintain the confidentiality of your account credentials and notify us immediately of any
                    unauthorized access to your account.
                  </li>
                  <li>
                    Be responsible for all activity under your account, even if you have not directly authorized it.
                  </li>
                </ul>
              </section>

              {/* Auctions & Bidding */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Auctions & Bidding</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>
                    <strong>Auction Process:</strong> Auctions on our Site are conducted in real-time or at scheduled
                    times, depending on the auction type. You can place bids on items listed by sellers.
                  </li>
                  <li>
                    <strong>Bidding Rules:</strong> By placing a bid, you are making a legally binding offer to purchase
                    the item. If you have the highest bid when the auction ends, you are required to complete the
                    purchase.
                  </li>
                  <li>
                    <strong>Bid Cancellation:</strong> Once a bid is placed, it cannot be canceled or withdrawn. If you
                    are the winning bidder, you are obligated to pay for the item and complete the transaction.
                  </li>
                  <li>
                    <strong>Reserve Price:</strong> Some items may have a reserve price. If the highest bid does not
                    meet the reserve price, the item will not be sold.
                  </li>
                </ul>
              </section>

              {/* Winning Bid and Payment */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Winning Bid and Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>
                    <strong>Payment:</strong> If you win an auction, you are required to pay the bid amount plus any
                    applicable taxes, fees, and shipping costs. Payments must be made through the methods specified on
                    the Site.
                  </li>
                  <li>
                    <strong>Failure to Pay:</strong> If you fail to make the required payment within the specified time,
                    we may cancel the transaction, and you may be subject to penalties, including being banned from
                    future auctions.
                  </li>
                </ul>
              </section>

              {/* Fees */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Fees</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>
                    <strong>Listing Fees:</strong> Sellers may be required to pay a fee to list an item for auction on
                    our Site. These fees are outlined in our fee schedule available on the Site.
                  </li>
                  <li>
                    <strong>Transaction Fees:</strong> We may charge a transaction fee for successful auctions, which
                    will be specified at the time of the auction.
                  </li>
                </ul>
              </section>

              {/* Seller Responsibilities */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Seller Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>
                    <strong>Item Description:</strong> Sellers must provide accurate and honest descriptions of the
                    items they list for auction, including clear details about condition, defects, and authenticity.
                  </li>
                  <li>
                    <strong>Shipping:</strong> Sellers are responsible for shipping the items to the winning bidder
                    within the timeframe specified on the Site.
                  </li>
                  <li>
                    <strong>Returns and Disputes:</strong> Sellers must adhere to our return policy and resolve any
                    disputes related to their items in a fair and timely manner.
                  </li>
                </ul>
              </section>

              {/* Prohibited Activities */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Prohibited Activities</h2>
                <p className="text-[#424242] leading-relaxed mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>
                    Engage in fraudulent activities, such as placing fake bids, creating multiple accounts to manipulate
                    auction outcomes, or misrepresenting items for sale.
                  </li>
                  <li>Interfere with or disrupt the Site&quot;s functionality or security.</li>
                  <li>Use our Site for any illegal or harmful purposes.</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#424242]">
                  <li>
                    <strong>Ownership:</strong> All content on the Site, including text, graphics, logos, images, and
                    software, is the property of [Your Website Name] or our licensors and is protected by intellectual
                    property laws.
                  </li>
                  <li>
                    <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to
                    access and use the Site for its intended purpose.
                  </li>
                </ul>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
                <p className="text-[#424242] leading-relaxed">
                  Your use of the Site is also governed by our [Privacy Policy], which outlines how we collect, use, and
                  protect your personal information.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-[#424242] leading-relaxed">
                  To the fullest extent permitted by law, [Your Website Name] shall not be liable for any direct,
                  indirect, incidental, special, or consequential damages arising from your use of the Site or any
                  transactions conducted through the Site.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-[#424242] leading-relaxed">
                  Any disputes arising out of or related to these Terms and your use of the Site will be resolved
                  through binding arbitration in accordance with the laws of [Your Country/State]. You agree to waive
                  the right to participate in class actions, class arbitrations, or any other proceedings involving
                  multiple parties.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-[#424242] leading-relaxed">
                  We reserve the right to suspend or terminate your access to the Site at our discretion, without
                  notice, for violations of these Terms or any other reason. If your account is terminated, any
                  outstanding transactions or obligations will remain enforceable.
                </p>
              </section>

              {/* Changes to These Terms */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Changes to These Terms</h2>
                <p className="text-[#424242] leading-relaxed">
                  We may update these Terms from time to time. The most current version will always be available on this
                  page. By continuing to use the Site after changes are posted, you agree to be bound by the updated
                  Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-[#424242] leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any
                  legal action or proceeding related to these Terms shall be brought in the competent courts located in
                  [Jurisdiction].
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
