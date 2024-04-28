const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductPage = () => {
  returm(
    <div>
      <div className="flex justify-center items-center h-screen">
        {/* Login Form */}
        <div className="login_Form bg-pink-50 px-8 py-6 border bordrt-pink-100 rounded-xl shadow-md">
          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500">
              update Product
            </h2>
          </div>
          {/* Input One */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="'Product Title"
              className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProductPage;
