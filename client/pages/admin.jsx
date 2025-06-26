import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);

  const fetchAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointments(res.data);
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`http://localhost:5000/api/appointments/${id}`);
    fetchAppointments();
  };

  const handleLogin = () => {
    if (password === "godfather123") {
      setAccess(true);
      fetchAppointments();
    } else {
      alert("Неправильний пароль");
    }
  };

  if (!access)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="space-y-4">
          <h2 className="text-white text-center text-xl">Введіть пароль адміністратора</h2>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-64 bg-zinc-800 text-white"
          />
          <Button onClick={handleLogin} className="w-full bg-yellow-400 text-black font-bold">
            Увійти
          </Button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Адмін панель — Записи</h1>
      {appointments.length === 0 ? (
        <p className="text-gray-400">Немає записів</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt) => (
            <li key={appt._id} className="flex justify-between items-center bg-zinc-800 p-4 rounded-xl">
              <div>
                <p className="text-lg font-semibold">{appt.name}</p>
                <p className="text-sm text-gray-400">{appt.phone}</p>
                <p className="text-xs text-gray-500">{new Date(appt.createdAt).toLocaleString()}</p>
              </div>
              <Button onClick={() => deleteAppointment(appt._id)} className="bg-red-500 hover:bg-red-400">
                Видалити
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
