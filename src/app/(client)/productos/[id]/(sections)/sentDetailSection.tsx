import { IconTruckDelivery, IconMapPin } from "@tabler/icons-react";

export const SentDetailSection = () => {
  return (
    <>
      <div className="bg-blue-50 p-4 space-y-3">
        <div className="flex gap-4">
          <div>
            <IconTruckDelivery size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">
              Envío a domicilio disponible
            </h3>
            <p className="text-sm">
              Este producto cuenta con despacho a domicilio y tiempos de envío
              dependiendo en el lugar de entrega. Ver opciones de envío
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <IconMapPin size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Retiro en lugar físico</h3>
            <p className="text-sm">
              Conoce las tiendas cercanas a tu localización. Ver tiendas
              disponibles
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
