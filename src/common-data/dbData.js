const proovedores = [
  {
    name: "proovedor SA 1",
    address: "calle 34 F # 125 - 45",
    active: true,
    risk: "moderado",
  },
  {
    name: "Los proovedores ltda 2",
    address: "Avenida 19 A # 127 - 37",
    active: false,
    risk: "bajo",
  },
  {
    name: "otros proovedores SA 3",
    address: "Carrera 38 da # 127 A - 12",
    active: true,
    risk: "alto",
  },
  {
    name: "demas proovedores ltda 4",
    address: "Calle 2 da # 38 bis - 43",
    active: true,
    risk: "medio",
  },
];

const clientes = [
  {
    city: "Buenos Aires",
    time: "de 1 a 3 años",
    address: "Calle 2 da # 38 bis - 43",
    frequency: "moderado",
  },
  {
    city: "Medellin",
    time: "mas de 5 años",
    address: "Calle 192 F # 3 oeste - 93",
    frequency: "moderado",
  },
  {
    city: "Sao Paulo",
    time: "de 3 a 5 años",
    address: "avenida 15  # 146 - 28",
    frequency: "moderado",
  },
  {
    city: "Guadalajara",
    time: "menos de 1 año",
    address: "Carrera 56 K # 32 Norte",
    frequency: "moderado",
  },
];
export const dbData = {
  proovedores: proovedores,
  clientes: clientes,
};
