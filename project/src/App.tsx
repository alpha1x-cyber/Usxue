import React, { useState, useEffect } from 'react';
import { 
  Book, FileText, Award, Megaphone, Mail, User, Menu, Home, Building2,
  Bell, LogOut, Calendar, Settings, ChevronLeft, X
} from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    'يرجى تحديث معلومات الملف الشخصي',
    'موعد الامتحانات النهائية: 15 يونيو 2024',
    'تم إضافة محاضرة جديدة في المنصة العلمية'
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        setShowNotifications(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#1a237e] text-white">
        <header className="bg-black text-white p-4 flex justify-between items-center">
          <span>myuoa.uoanbar.edu.iq</span>
          <div className="flex gap-4">
            <button className="hover:text-yellow-400 transition-colors">⭐</button>
            <button className="hover:text-teal-400 transition-colors">🔒</button>
            <button className="hover:text-blue-400 transition-colors">↻</button>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <div className="text-right mb-8 md:mb-0">
            <h1 className="text-4xl mb-4">جامعة الانبار</h1>
            <h2 className="text-2xl">نظام جامعتي</h2>
          </div>
          
          <div className="w-32 h-32 relative animate-pulse">
            <img 
              src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=128&h=128" 
              alt="University Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          
          <div className="text-right">
            <h1 className="text-4xl mb-4">جمهورية العراق</h1>
            <h2 className="text-2xl">وزارة التعليم العالي والبحث العلمي</h2>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-gray-900/50 p-8 rounded-lg mt-8 backdrop-blur-sm animate-fade-in">
          <h2 className="text-2xl text-center mb-6">واجهة دخول الطالب</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-right mb-2">البريد الالكتروني</label>
              <input 
                type="email" 
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition-all" 
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-right mb-2">كلمة المرور</label>
              <input 
                type="password" 
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition-all" 
                required
              />
            </div>
            <button 
              className={`w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : 'دخول'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <span>myuoa.uoanbar.edu.iq</span>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowNotifications(!showNotifications)} 
            className="relative hover:text-teal-400 transition-colors"
          >
            <Bell size={24} />
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </button>
          <button 
            onClick={() => setShowMenu(!showMenu)} 
            className="text-teal-500 hover:text-teal-400 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {showNotifications && (
        <div className="fixed left-4 top-16 w-80 bg-gray-800 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="font-semibold">الإشعارات</h3>
            <button 
              onClick={() => setShowNotifications(false)}
              className="hover:text-red-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            {notifications.map((notification, index) => (
              <div 
                key={index} 
                className="p-3 hover:bg-gray-700 rounded-lg mb-2 transition-colors cursor-pointer"
              >
                {notification}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto p-4">
        <div className="bg-gray-800 p-6 rounded-lg mb-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-2xl mb-2">ياسين طه إبراهيم عايش</h1>
            <p className="text-gray-400">كلية التربية للعلوم الصرفة - قسم الكيمياء</p>
            <div className="w-24 h-24 mx-auto my-4">
              <img 
                src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=96&h=96" 
                alt="University Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl text-center mb-8 animate-fade-in">الصفحة الرئيسية</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button className="dashboard-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <FileText size={32} className="mb-2" />
            <span>النتيجة</span>
          </button>
          <button className="dashboard-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Book size={32} className="mb-2" />
            <span>الأقسام الداخلية</span>
          </button>
          <button className="dashboard-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Award size={32} className="mb-2" />
            <span>المنصة العلمية</span>
          </button>
          <button className="dashboard-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <FileText size={32} className="mb-2" />
            <span>التأييدات والوثائق</span>
          </button>
        </div>

        <button 
          className="w-full dashboard-card mb-8 animate-fade-in" 
          style={{ animationDelay: '0.5s' }}
        >
          <Megaphone size={32} className="mb-2" />
          <span>النشاطات والاعلانات</span>
        </button>

        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="dashboard-card">
            <Mail size={32} className="mb-2" />
            <span>البريد الالكتروني</span>
          </button>
          <button className="dashboard-card">
            <User size={32} className="mb-2" />
            <span>حسابي</span>
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="fixed right-0 top-0 h-full w-64 bg-[#1a237e] p-4 shadow-lg animate-fade-in z-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">القائمة الرئيسية</h3>
            <button 
              onClick={() => setShowMenu(false)}
              className="hover:text-red-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="menu-item">
              <Home size={24} />
              <span>الصفحة الرئيسية</span>
            </button>
            <button className="menu-item">
              <Building2 size={24} />
              <span>الاقسام الداخلية</span>
            </button>
            <button className="menu-item">
              <Calendar size={24} />
              <span>الجدول الدراسي</span>
            </button>
            <button className="menu-item">
              <Settings size={24} />
              <span>الإعدادات</span>
            </button>
            <button 
              className="menu-item text-red-400 hover:text-red-300 mt-auto"
              onClick={() => setIsLoggedIn(false)}
            >
              <LogOut size={24} />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      )}

      <footer className="text-center p-4 text-gray-400 text-sm mt-8">
        جميع الحقوق محفوظة: جامعة الانبار - مركز الحاسبة الالكترونية
      </footer>
    </div>
  );
}

export default App;