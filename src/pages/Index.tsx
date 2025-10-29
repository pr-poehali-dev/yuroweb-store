import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Холодильник Samsung Premium',
    category: 'Холодильники',
    price: 89990,
    image: 'https://cdn.poehali.dev/projects/9096e942-ed37-4288-9b03-4515b273b313/files/c7d4428b-8e40-40c1-bedd-e83f8316d263.jpg',
    features: ['No Frost', 'Инверторный компрессор', 'LED освещение']
  },
  {
    id: 2,
    name: 'Стиральная машина LG TurboWash',
    category: 'Стиральные машины',
    price: 54990,
    image: 'https://cdn.poehali.dev/projects/9096e942-ed37-4288-9b03-4515b273b313/files/8e1d73fa-2c81-4034-aa8f-ed7c2b8569ff.jpg',
    features: ['8 кг загрузка', 'AI DD™', 'Steam™ технология']
  },
  {
    id: 3,
    name: 'Телевизор Sony 4K OLED',
    category: 'Телевизоры',
    price: 129990,
    image: 'https://cdn.poehali.dev/projects/9096e942-ed37-4288-9b03-4515b273b313/files/4eff4cee-24a9-4989-b91a-fef27ca4c9e5.jpg',
    features: ['4K HDR', 'Android TV', '65 дюймов']
  }
];

const deliveryFeatures = [
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставим технику по Москве в день заказа'
  },
  {
    icon: 'ShieldCheck',
    title: 'Гарантия качества',
    description: 'Официальная гарантия на всю технику'
  },
  {
    icon: 'Wrench',
    title: 'Бесплатная установка',
    description: 'Подключим и настроим вашу технику'
  },
  {
    icon: 'CreditCard',
    title: 'Удобная оплата',
    description: 'Оплата при получении или картой онлайн'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const categories = ['Все', 'Холодильники', 'Стиральные машины', 'Телевизоры'];
  
  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">
                Каталог
              </a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors font-medium">
                Доставка
              </a>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              🎉 Скидки до 30% на избранные товары
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Бытовая техника
              <br />
              для вашего дома
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор качественной техники от ведущих мировых брендов с быстрой доставкой
            </p>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-primary to-accent' : ''}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-muted/30">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    Хит продаж
                  </Badge>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Check" size={14} className="text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Преимущества доставки
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы заботимся о вашем комфорте на каждом этапе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2">
              <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
              <p className="text-muted-foreground mb-6">
                Наши специалисты помогут выбрать технику и расскажут об условиях доставки
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить нам
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">TechStore</h3>
          </div>
          <p className="text-background/70 mb-4">
            Качественная бытовая техника с доставкой по всей России
          </p>
          <div className="flex gap-4 justify-center">
            <Icon name="Instagram" className="cursor-pointer hover:text-accent transition-colors" size={24} />
            <Icon name="Youtube" className="cursor-pointer hover:text-accent transition-colors" size={24} />
            <Icon name="Mail" className="cursor-pointer hover:text-accent transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
