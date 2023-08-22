import React from 'react';

function BasicLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-40 px-5 bg-yellow-500 flex items-center justify-between">
        Header
      </div>
      <div className="flex">
        <div className="mt-4 w-52 h-screen bg-yellow-500">
          <a href="#" className="block py-2 px-4">Nav</a>
        </div>
        <div className="flex flex-col mt-4 ml-4 flex-1">
          
          <div>
          <div className="h-96 bg-blue-500">
            <a href="#" className="block py-2 px-4">Content here</a>
          </div>
          <div className="mt-4 h-96 bg-yellow-500">
            <a href="#" className="block py-2 px-4">Ads</a>
          </div>
          </div>
          
          
          <div className="flex-1 bg-yellow-500">
            <a href="#" className="block py-2 px-4">Footer</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
