import SectionHeader from '../common/SectionHeader';
import { promoData } from '../../constants/homeData';
import './PromotionsSection.css';

export default function PromotionsSection() {
  return (
    <section className="promo-section container">
      <SectionHeader title="Khuyến mãi cực hot" />
      <div className="promo-grid">
        {promoData.map((promo) => (
          <div 
            key={promo.id} 
            className="promo-card"
            style={{ 
              background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${promo.image}") center/cover` 
            }}
          >
            <span className="promo-badge">{promo.badge}</span>
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
