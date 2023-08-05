type ValidAmount = "empty" | number;
interface ClothesWarehouse {
 	jackets: ValidAmount;
 	hats: ValidAmount;
 	socks: ValidAmount;
 	pants: ValidAmount;
 }

 interface StationeryWarehouse {
 	scissors: ValidAmount;
 	paper: "empty" | boolean;
}

interface AppliancesWarehouse {
 	dishwashers: ValidAmount;
 	cookers: ValidAmount;
 	mixers: ValidAmount;
 }

// общая структура данных, наследует все данные из трех выше
// + добавляет свои
interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
	const filteredData: string [] = Object.entries(data).filter(i => i[1] === 'empty').map(i => i[0]);
	return (filteredData.length > 0) ? `We need this items: ${filteredData}` : "Everything fine";
}

console.log(printReport(totalData));
