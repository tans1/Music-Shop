import React from "react";
import artist from "../../assets/artist.png";
function NewMusic() {
  return (
    <div className="border-l-0 border-r-0 border-t-[1px] border-b-[1px]   my-[100px] w-full">
      <div className="flex justify-center">
        <div className="w-[400px] h-[400px] border-[1px] border-solid border-gray-500">
          <img src={artist} alt="artist" className="w-full h-full" />
        </div>
        <div className="w-[600px] pl-[100px] pt-[30px]">
          <p className="text-4xl font-bold text-white">
            New POP Music - Yohana
          </p>
          <p className="text-xl font-semibold my-5 text-gray-400">
            ሳይሽ ነው የማውቅሽ መች ትጠፊኝ እና <br />
            ለሰው ላመልሽ ብትይም ነኝ ደህና <br />
            ሳይሽ ነው የማውቅሽ አትጠፊኝም እና <br />
            እንደሰው ላመልሽ አትበይኝ ነኝ ደህና <br />
            እንባ ምን በወጣሽ <br />
            ቱ በይ ላብርድልሽ <br />
            ገላጋይ (ገላጋይ) <br />
            ግሎ እንዳያሳርሽ .....
            <br />
          </p>
          <div>
            <button className="px-3 bg-amber-600">Get Music</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMusic;
