import { JSX, useEffect, useState } from 'react';
import {
  UilEstate,
  UilGift,
  UilLamp,
  UilMobileAndroid,
  UilMonitor,
  UilShoppingBag,
  UilStar,
  UilWatchAlt,
  UilWrench,
  UilBox,
  UilCamera,
  UilHeart,
  UilBookOpen,
  UilFootball,
  UilCar,
  UilRestaurant
} from '@iconscout/react-unicons';
import { Link } from 'react-router';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL;

interface Categoria {
  IdCategory: string;
  name: string;
}

// Configuración de iconos y colores por categoría
const categoryConfig: Record<string, { icon: (size: number) => JSX.Element; gradient: string; color: string }> = {
  'ofertas': {
    icon: (size) => <UilStar size={size} />,
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
    color: '#FF6B6B'
  },
  'accesorios': {
    icon: (size) => <UilShoppingBag size={size} />,
    gradient: 'linear-gradient(135deg, #A8E6CF 0%, #3D9970 100%)',
    color: '#3D9970'
  },
  'moda': {
    icon: (size) => <UilWatchAlt size={size} />,
    gradient: 'linear-gradient(135deg, #DDA0DD 0%, #9B59B6 100%)',
    color: '#9B59B6'
  },
  'ropa': {
    icon: (size) => <UilWatchAlt size={size} />,
    gradient: 'linear-gradient(135deg, #DDA0DD 0%, #9B59B6 100%)',
    color: '#9B59B6'
  },
  'electrónica': {
    icon: (size) => <UilMonitor size={size} />,
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    color: '#0984e3'
  },
  'electronica': {
    icon: (size) => <UilMonitor size={size} />,
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    color: '#0984e3'
  },
  'tecnología': {
    icon: (size) => <UilMonitor size={size} />,
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    color: '#0984e3'
  },
  'tecnologia': {
    icon: (size) => <UilMonitor size={size} />,
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    color: '#0984e3'
  },
  'hogar': {
    icon: (size) => <UilEstate size={size} />,
    gradient: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
    color: '#e17055'
  },
  'casa': {
    icon: (size) => <UilEstate size={size} />,
    gradient: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
    color: '#e17055'
  },
  'regalos': {
    icon: (size) => <UilGift size={size} />,
    gradient: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
    color: '#e84393'
  },
  'herramientas': {
    icon: (size) => <UilWrench size={size} />,
    gradient: 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
    color: '#2d3436'
  },
  'celulares': {
    icon: (size) => <UilMobileAndroid size={size} />,
    gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
    color: '#6c5ce7'
  },
  'móviles': {
    icon: (size) => <UilMobileAndroid size={size} />,
    gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
    color: '#6c5ce7'
  },
  'iluminación': {
    icon: (size) => <UilLamp size={size} />,
    gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
    color: '#fdcb6e'
  },
  'cámaras': {
    icon: (size) => <UilCamera size={size} />,
    gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
    color: '#00cec9'
  },
  'fotografía': {
    icon: (size) => <UilCamera size={size} />,
    gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
    color: '#00cec9'
  },
  'salud': {
    icon: (size) => <UilHeart size={size} />,
    gradient: 'linear-gradient(135deg, #ff7675 0%, #d63031 100%)',
    color: '#d63031'
  },
  'belleza': {
    icon: (size) => <UilHeart size={size} />,
    gradient: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
    color: '#e17055'
  },
  'libros': {
    icon: (size) => <UilBookOpen size={size} />,
    gradient: 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%)',
    color: '#636e72'
  },
  'deportes': {
    icon: (size) => <UilFootball size={size} />,
    gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
    color: '#00b894'
  },
  'juguetes': {
    icon: (size) => <UilGift size={size} />,
    gradient: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
    color: '#e84393'
  },
  'autos': {
    icon: (size) => <UilCar size={size} />,
    gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    color: '#0984e3'
  },
  'comida': {
    icon: (size) => <UilRestaurant size={size} />,
    gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
    color: '#f39c12'
  },
};

// Colores por defecto para categorías no mapeadas
const defaultColors = [
  { gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)', color: '#6c5ce7' },
  { gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', color: '#0984e3' },
  { gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)', color: '#00b894' },
  { gradient: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)', color: '#e84393' },
  { gradient: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)', color: '#e17055' },
  { gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)', color: '#00cec9' },
];

const getCategoryConfig = (name: string, index: number) => {
  const normalizedName = name.toLowerCase().trim();

  // Buscar coincidencia exacta
  if (categoryConfig[normalizedName]) {
    return categoryConfig[normalizedName];
  }

  // Buscar coincidencia parcial
  for (const key of Object.keys(categoryConfig)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return categoryConfig[key];
    }
  }

  // Config por defecto con color rotativo
  const defaultColor = defaultColors[index % defaultColors.length];
  return {
    icon: (size: number) => <UilBox size={size} />,
    ...defaultColor
  };
};

const EcomCategoryNavs = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categorias`);
        const data = await response.json();

        if (data.ok && data.categorias) {
          setCategorias(data.categorias);
        }
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex py-3 categories-scroll-container"
        style={{
          gap: '1.5rem',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div
            key={i}
            className="rounded-circle bg-body-secondary flex-shrink-0"
            style={{ width: 65, height: 65, opacity: 0.5 }}
          />
        ))}
      </div>
    );
  }

  if (categorias.length === 0) {
    return null;
  }

  return (
    <div
      className="d-flex py-3 categories-scroll-container"
      style={{
        gap: '1.5rem',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        justifyContent: categorias.length <= 6 ? 'center' : 'flex-start',
      }}
    >
      <style>
        {`
          .categories-scroll-container::-webkit-scrollbar {
            display: none;
          }
          @media (min-width: 992px) {
            .categories-scroll-container {
              justify-content: center !important;
              flex-wrap: wrap;
              gap: 2rem !important;
            }
          }
        `}
      </style>
      {categorias.map((categoria, index) => (
        <CategoryItem
          key={categoria.IdCategory}
          categoria={categoria}
          index={index}
        />
      ))}
    </div>
  );
};

const CategoryItem = ({
  categoria,
  index
}: {
  categoria: Categoria;
  index: number;
}) => {
  const config = getCategoryConfig(categoria.name, index);
  const IconComponent = config.icon;

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-${categoria.IdCategory}`}>
          <span className="fw-semibold">{categoria.name}</span>
        </Tooltip>
      }
    >
      <Link
        to={`/products-filter?category=${categoria.IdCategory}`}
        className="text-decoration-none category-nav-item flex-shrink-0"
        style={{ display: 'block' }}
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: 65,
            height: 65,
            background: config.gradient,
            boxShadow: `0 4px 15px ${config.color}40`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.08)';
            e.currentTarget.style.boxShadow = `0 12px 25px ${config.color}50`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = `0 4px 15px ${config.color}40`;
          }}
        >
          <div style={{ color: 'white' }}>
            {IconComponent(30)}
          </div>
        </div>
      </Link>
    </OverlayTrigger>
  );
};

export default EcomCategoryNavs;
