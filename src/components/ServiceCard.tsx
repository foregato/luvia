import Icon, { IconName } from "@/components/Icon";
import { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-card">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-blush text-rose transition-colors duration-300 group-hover:bg-rose group-hover:text-paper">
        <Icon name={service.icon as IconName} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg text-ink">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        {service.description}
      </p>
    </div>
  );
}
