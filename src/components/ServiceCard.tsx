import Image from 'next/image';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="service-item">
      <Image
        src={service.image}
        alt={service.imageAlt}
        width={500}
        height={300}
        style={{
          objectFit: 'cover',
        }}
      />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a className="btn" href="">
        Learn More
      </a>
    </div>
  );
};

export default ServiceCard;
