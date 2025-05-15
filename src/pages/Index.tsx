
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [email, setEmail] = useState("");

  const ecoProblems = [
    {
      id: "climate",
      title: "Изменение климата",
      description: "Повышение температуры и изменение климатических условий влияют на экосистемы и жизнь людей",
      icon: "ThermometerSun",
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: "pollution",
      title: "Загрязнение океанов",
      description: "Пластик и другие отходы угрожают морской жизни и здоровью людей",
      icon: "Waves",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "deforestation",
      title: "Вырубка лесов",
      description: "Уничтожение лесных массивов ведёт к потере биоразнообразия и усилению климатических изменений",
      icon: "Trees",
      color: "bg-green-100 text-green-600"
    }
  ];

  const features = [
    {
      title: "Интерактивная инфографика",
      description: "Визуализируйте сложные экологические данные простым и понятным способом",
      icon: "LineChart"
    },
    {
      title: "Персонализация",
      description: "Получайте рекомендации и материалы, адаптированные под ваши интересы и уровень знаний",
      icon: "UserRound"
    },
    {
      title: "Практические инструменты",
      description: "Применяйте полученные знания с помощью наших инструментов для расчёта углеродного следа",
      icon: "CalculatorIcon"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Изучайте",
      description: "Исследуйте интерактивную инфографику об экологических проблемах"
    },
    {
      number: "02",
      title: "Анализируйте",
      description: "Оцените свое воздействие на окружающую среду с помощью наших инструментов"
    },
    {
      number: "03",
      title: "Действуйте",
      description: "Получите рекомендации и внедрите устойчивые практики в свою жизнь"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // В будущем можно добавить обработку подписки
    alert(`Спасибо за интерес! Ваш email: ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">ЭкоГрафика</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">О продукте</a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Возможности</a>
            <a href="#how" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Как это работает</a>
            <a href="#join" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Присоединиться</a>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Начать</Button>
        </div>
      </header>

      <main>
        {/* Главная секция */}
        <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Экологическое образование через <span className="text-green-600">интерактивную инфографику</span>
              </h1>
              <p className="text-xl text-gray-600">
                Упрощаем понимание экологических проблем и мотивируем к устойчивым действиям через визуализацию, персонализацию и практические инструменты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 h-12 px-6">Исследовать платформу</Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 h-12 px-6">Узнать больше</Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -z-10 -left-4 -top-4 w-64 h-64 bg-green-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -z-10 -right-8 -bottom-8 w-72 h-72 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&h=400" 
                alt="Природный ландшафт" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* О продукте */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Понимание экологических проблем</h2>
              <p className="text-xl text-gray-600">
                Наша платформа предоставляет интерактивный способ изучения экологических вызовов современности и поиска решений для устойчивого будущего.
              </p>
            </div>

            <Tabs defaultValue="climate" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                {ecoProblems.map((problem) => (
                  <TabsTrigger key={problem.id} value={problem.id} className="text-base py-3">
                    {problem.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {ecoProblems.map((problem) => (
                <TabsContent key={problem.id} value={problem.id} className="animate-fade-in">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${problem.color}`}>
                      <Icon name={problem.icon} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{problem.title}</h3>
                      <p className="text-lg text-gray-600">{problem.description}</p>
                      <div className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <Icon name="Lightbulb" className="text-amber-500" />
                          <span>Причины</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="AlertTriangle" className="text-red-500" />
                          <span>Последствия</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="CheckCircle" className="text-green-500" />
                          <span>Решения</span>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-2">Подробнее</Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Особенности */}
        <section id="features" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Возможности нашей платформы</h2>
              <p className="text-xl text-gray-600">
                Мы объединяем передовые технологии визуализации данных и персонализированный подход к обучению.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <CardHeader>
                    <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                      <Icon name={feature.icon} className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Как это работает */}
        <section id="how" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Как это работает</h2>
              <p className="text-xl text-gray-600">
                Простой процесс, который поможет вам понять экологические проблемы и принять меры для их решения.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-green-600 mb-4 opacity-70">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-inner flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Trophy" className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Образовательные достижения</h3>
                <p className="text-gray-600">Получайте значки и сертификаты за изучение материалов и внедрение экологических практик в повседневную жизнь.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Присоединиться */}
        <section id="join" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Присоединяйтесь к нашему экологическому сообществу</h2>
                <p className="text-lg text-gray-600">
                  Получайте эксклюзивный доступ к новым материалам, инструментам и обновлениям нашей платформы.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 h-12">
                    Подписаться
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500">
                  Мы уважаем вашу конфиденциальность и никогда не передаем ваши данные третьим лицам.
                </p>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -z-10 right-4 bottom-4 w-48 h-48 bg-green-200 rounded-full opacity-40 blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1485238523356-fa21fd0cf074?auto=format&fit=crop&w=600&h=400" 
                    alt="Экологическое сообщество" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" className="h-6 w-6 text-green-400" />
                <span className="font-bold text-xl">ЭкоГрафика</span>
              </div>
              <p className="text-gray-300 text-sm">
                Интерактивный образовательный продукт для понимания экологических проблем и вдохновения к устойчивым действиям.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Продукт</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">О платформе</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Возможности</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Примеры использования</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Ресурсы</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Блог</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Документация</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Поддержка</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Контакты</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <Icon name="Mail" className="h-4 w-4" />
                    <span>info@ecographica.ru</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <Icon name="MapPin" className="h-4 w-4" />
                    <span>Москва, Россия</span>
                  </li>
                </ul>
                
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 ЭкоГрафика. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
