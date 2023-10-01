function App() {
  return (
    <main>
      <div className="h-screen w-screen">
        <div className=" flex flex-col items-end justify-end bg-cover-photo text-white h-full w-full">
          <div className="m-4 px-4 py-1 bg-black rounded-md opacity-70 w-50">
            <button className="bg-transparent w-full">
              <img />
              <span className="text-white">Create with avatar</span>
            </button>
          </div>
          <div className="m-4 px-4 py-1 bg-black rounded-md opacity-70 w-50">
            <button className="bg-transparent w-full">
              <img />
              <span className="text-white">Edit cover photo</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
