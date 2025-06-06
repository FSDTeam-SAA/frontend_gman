import FarmsCard from "./sheard/FramsCarda";

// Updated farm data with profileImage
const farmsData = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "California, USA",
    image: "/asset/frams1.jpg",
    profileImage: "/asset/profile1.png",
    description:
      "Organic vegetables and fruits grown with sustainable farming practices.",
    rating: 4.8,
    products: ["Tomatoes", "Lettuce", "Carrots", "Apples"],
    established: 2015,
    size: "50 acres",
    certifications: ["USDA Organic", "Non-GMO"],
  },
  {
    id: 2,
    name: "Sunrise Dairy Farm",
    location: "Wisconsin, USA",
    image: "/asset/frams2.jpg",
    profileImage: "/asset/profile1.png",
    description: "Fresh milk and dairy products from grass-fed cows.",
    rating: 4.6,
    products: ["Milk", "Cheese", "Butter", "Yogurt"],
    established: 2008,
    size: "120 acres",
    certifications: ["Grass-Fed", "Hormone-Free"],
  },
  {
    id: 3,
    name: "Mountain View Ranch",
    location: "Colorado, USA",
    image: "/asset/frams3.jpg",
    profileImage: "/asset/profile1.png",
    description: "Premium grass-fed beef and free-range poultry.",
    rating: 4.9,
    products: ["Beef", "Chicken", "Eggs", "Lamb"],
    established: 2010,
    size: "200 acres",
    certifications: ["Grass-Fed", "Free-Range", "Pasture-Raised"],
  },
  {
    id: 4,
    name: "Mountain View Ranch",
    location: "Colorado, USA",
    image: "/asset/frams4.jpg",
    profileImage: "/asset/profile1.png",
    description: "Premium grass-fed beef and free-range poultry.",
    rating: 4.9,
    products: ["Beef", "Chicken", "Eggs", "Lamb"],
    established: 2010,
    size: "200 acres",
    certifications: ["Grass-Fed", "Free-Range", "Pasture-Raised"],
  },
];

const Featured_Farms = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[100px]">
      <div>
        <h2 className="text-3xl text-[#272727] font-semibold mb-8">
          Featured Farms
        </h2>

        {/* Grid layout for farm cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {farmsData.map((farm) => (
            <FarmsCard
              key={farm.id}
              id={farm.id}
              name={farm.name}
              location={farm.location}
              image={farm.image}
              profileImage={farm.profileImage}
              description={farm.description}
              rating={farm.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured_Farms;
