import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeDollarSign, Scissors, Clock } from "lucide-react";
import axios from "axios";

export default function GangsterBarbershop() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/appointments", {
        name,
        phone,
      });
      setSubmitted(true);
      setName("");
      setPhone("");
    } catch (err) {
      console.error("Помилка при записі:", err);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <header className="bg-zinc-900 py-6 px-10 shadow-xl flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-widest uppercase text-yellow-400">
          The Don's Cuts
        </h1>
        <nav className="space-x-6 text-sm">
          <a href="#services" className="hover:text-yellow-400">Послуги</a>
          <a href="#about" className="hover:text-yellow-400">Про нас</a>
          <a href="#contact" className="hover:text-yellow-400">Запис</a>
        </nav>
      </header>

      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-center py-20 px-6 bg-[url('/barbershop-bg.jpg')] bg-cover bg-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-extrabold text-yellow-300 mb-4 drop-shadow-md"
        >
          Стрижки для справжніх джентльменів
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          В атмосфері гангстерських 30-х. Тут ріжемо тільки волосся... і трохи правила.
        </p>
        <Button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-300 transition">
          Записатись зараз
        </Button>
      </motion.section>

      <motion.section 
        id="services" 
        className="py-20 px-6 bg-zinc-800"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl text-center font-bold text-yellow-400 mb-10">Наші Послуги</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-zinc-900 text-white">
            <CardContent className="p-6 text-center">
              <Scissors className="mx-auto mb-4 text-yellow-400" size={40} />
              <h4 className="text-xl font-semibold">Класична стрижка</h4>
              <p className="text-gray-400 mt-2">20$ — Стиль, що говорить сам за себе</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 text-white">
            <CardContent className="p-6 text-center">
              <Clock className="mx-auto mb-4 text-yellow-400" size={40} />
              <h4 className="text-xl font-semibold">Швидке гоління</h4>
              <p className="text-gray-400 mt-2">15$ — Чітко, швидко, по ділу</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 text-white">
            <CardContent className="p-6 text-center">
              <BadgeDollarSign className="mx-auto mb-4 text-yellow-400" size={40} />
              <h4 className="text-xl font-semibold">Повний образ</h4>
              <p className="text-gray-400 mt-2">40$ — Все включено, як для боса</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="bg-black text-white py-20 px-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl text-yellow-400 font-bold mb-6">Про нас</h3>
          <p className="text-gray-300">
            "The Don's Cuts" — не просто барбершоп. Це місце сили для тих, хто цінує стиль, традиції та трохи диму віскі в повітрі. Засновано в 2020, ми вже стали легендою в своєму районі.
          </p>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="bg-zinc-900 text-white py-20 px-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">Записатись</h3>
          {submitted ? (
            <p className="text-green-400 text-center">Дякуємо, ви записані!</p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input 
                placeholder="Ваше ім'я" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="bg-black text-white border-yellow-400"
                required
              />
              <Input 
                placeholder="Номер телефону" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="bg-black text-white border-yellow-400"
                required
              />
              <Button type="submit" className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-300">
                Записатись до майстра
              </Button>
            </form>
          )}
        </div>
      </motion.section>

      <footer className="bg-black text-center text-gray-500 py-6 text-sm">
        © 2025 The Don's Cuts. Всі права захищено.
      </footer>
    </main>
  );
}
