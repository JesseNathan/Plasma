import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      const timeFormatted = now.toLocaleString("id-ID", options);
      setTime(timeFormatted);
    };

    updateTime(); // update pertama
    const interval = setInterval(updateTime, 1000); // update setiap 1 detik

    return () => clearInterval(interval); 
  }, []);

  return (        
  <div className="grid grid-cols-2 gap-4 h-screen p-4 bg-gray-100">

  <div className="grid grid-cols-3 auto-rows-[120px] max-h-[720px] overflow-auto rounded shadow bg-gray-300">
    {/* Header */}
    <div className="col-span-2 bg-[#323949] flex items-center justify-center ">
      <h1 className="text-2xl text-white font-bold">NAMA PASIEN</h1>
    </div>
    <div className="bg-[#6796B4] flex items-center justify-center ">
      <h1 className="text-2xl text-white font-bold">NO. ANTRIAN</h1>
    </div>
  
    {/* Baris 1 */}
    <div className="col-span-2 bg-[#6796B4] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Alexander Jesse</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-[#323949]'>Belum</p>
      </div>
    </div>
    <div className="bg-[#323949] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B2</h1>
    </div>

    {/* Baris 2 */}
    <div className="col-span-2 bg-[#4C6E84] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Yugo Utomo</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-white'>Belum</p>
      </div>
    </div>
    <div className="bg-[#455863] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B3</h1>
    </div>

    {/* Baris 3 */}
    <div className="col-span-2 bg-[#6796B4] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Vincent</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-[#323949]'>Belum</p>
      </div>
    </div>
    <div className="bg-[#323949] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B4</h1>
    </div>

    {/* Baris 4 */}
    <div className="col-span-2 bg-[#4C6E84] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Citra</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-white'>Belum</p>
      </div>
    </div>
    <div className="bg-[#455863] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B5</h1>
    </div>

    {/* Baris 5 */}
    <div className="col-span-2 bg-[#6796B4] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Daffa</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-[#323949]'>Belum</p>
      </div>
    </div>
    <div className="bg-[#323949] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B6</h1>
    </div>

    {/* Baris 6 */}
    <div className="col-span-2 bg-[#4C6E84] p-3 px-5 flex flex-col justify-between">
      <p className="text-3xl text-white font-bold">Badang Dung</p>
      <div className='justify-between flex'>
        <p className="text-xl font-bold text-white">{time}</p>
        <p className='text-2xl font-bold text-white'>Belum</p>
      </div>
    </div>
    <div className="bg-[#455863] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">B7</h1>
    </div>

   
  </div>


    {/*Kanan: Kotak 3 row */}
  <div className="grid grid-rows-[1fr_190px_1fr] gap-5">
      {/* Videotron */}
    <div className="bg-gray-300 rounded h-full">

    </div>

    {/* Antrian Poli */}
    <div className="grid grid-cols-4 gap-3">
      <div className="bg-[#455863] rounded content-center">
        <p className='text-center items-center text-white font-bold text-2xl'><span className='text-5xl'>1</span> <br /> POLI <br /> A,B,C</p>
      </div>
      <div className="bg-[#4C6E84] rounded content-center">
         <p className='text-center items-center text-white font-bold text-2xl'><span className='text-5xl'>2</span> <br /> POLI <br /> A,B,C</p>
      </div>
      <div className="bg-[#455863] rounded content-center">
         <p className='text-center items-center text-white font-bold text-2xl'><span className='text-5xl'>3</span> <br /> POLI <br /> A,B,C</p>
      </div>
      <div className="bg-[#4C6E84] rounded content-center">
         <p className='text-center items-center text-white font-bold text-2xl'><span className='text-5xl'>4</span> <br /> POLI <br /> A,B,C</p>
      </div>
    </div>

    {/* Info Antrian */}
    <div className="grid grid-cols-[1fr_190px] rounded h-full text-center text-white">
      <div className='grid grid-rows-3 bg-[#5FABA3]'>
        <div className='row-span-2 self-center'>
           <p class="text-xl font-bold-600">Alexander Jesse</p>
           <h1 class="text-9xl font-bold">B2</h1>
        </div>
       <div class="bg-[#517D98] text-4xl font-bold p-2 mt-4 content-center">
         <p>MENUJU KE LOKET :</p>
       </div>
      </div>
      <div className='text-[160px] bg-[#323949] content-center font-bold'>2</div>
    </div>

  </div>
</div>


  )
}

export default App
