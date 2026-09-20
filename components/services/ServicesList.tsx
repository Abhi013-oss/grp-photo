import { ServiceOffering } from "@/lib/types";
import { ServiceSection } from "./ServiceSection";

interface ServicesListProps {
  services: ServiceOffering[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="w-full">
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
