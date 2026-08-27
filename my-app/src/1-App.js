

/*import Button from "./components/Button";

function App() {
  return (
    <div>
      
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">🎬 MovieHub</span>
        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
      </div>

      <div className="bg-slate-100 text-center">
        <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
        <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
        <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>
      </div>

      <div className="max-w-sm mx-auto mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
        <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
        <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">Sci-Fi</span>
      </div>

      <div className="flex gap-3 p-6">
        <Button>บันทึก</Button>
        <Button variant="danger">ลบ</Button>
        <Button variant="ghost">ยกเลิก</Button>
      </div>

      </div>

    </div>
  );
}

export default App;

*/

/*

import Hello from './components/Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ชนะโชค ชัยศรีวงค์', nickname: 'โต้ง',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'หมา'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 2, name: 'กมลภพ ขยายวงค์', nickname: 'เซ้น',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'กระเพรา'] },

  { id: 3, name: 'ภานุกร พิมพ์พา', nickname: 'กาฟิว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'แกงกะหรี่'] },
];

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))}
      <Footer />
    </div>
  );
}

//export default App;

*/