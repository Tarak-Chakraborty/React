import { useState } from "react";

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const imageStore = [
    'https://images.pexels.com/photos/7600993/pexels-photo-7600993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9415461/pexels-photo-9415461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14852391/pexels-photo-14852391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/11996404/pexels-photo-11996404.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  ];

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? imageStore.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === imageStore.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full h-screen duration-200 justify-center items-center flex bg-blue-100">
      <div className="flex flex-col items-center justify-center w-96 h-80">
        <div className="w-full h-full">
          <div className="w-full h-4/5 bg-blue-900 flex justify-center rounded-lg">
            <div
              className="w-3/5 bg-blue-300 h-full"
              style={{
                backgroundImage: `url('${imageStore[imageIndex]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-40">
          <button onClick={prevImage} className="bg-blue-900 rounded-md px-8 py-2 text-2xl text-white shadow-2xl outline-none">
            Prev
          </button>
          <button onClick={nextImage} className="bg-blue-900 rounded-md px-8 py-2 text-2xl text-white shadow-2xl outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;