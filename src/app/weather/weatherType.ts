//
//   interface Coord {
//     lon: number;
//     lat: number;
//   }
//
//   interface Weather {
//     id: number;
//     main: string;
//     description: string;
//     icon: string;
//   }
//
//   interface City {
//     name: string;
//     coord: Coord;
//     sys: Sys;
//
//   }
//
//   export interface Main {
//     temp: number;
//     pressure: number;
//     humidity: number;
//     temp_min: number;
//     temp_max: number;
//   }
//
//   interface Wind {
//     speed: number;
//     deg: number;
//     gust: number;
//   }
//
//   interface Clouds {
//     all: number;
//   }
//
//   interface Sys {
//     type: number;
//     id: number;
//     message: number;
//     country: string;
//     sunrise: number;
//     sunset: number;
//   }
//
//   export interface WeatherType {
//     // coord: Coord;
//     // weather: Weather[];
//     // base: string;
//     // main: Main;
//     // visibility: number;
//     // wind: Wind;
//     // clouds: Clouds;
//     // dt: number;
//     // sys: Sys;
//     // id: number;
//     // name: string;
//     // cod: number;
//     // city: City;
//     date: string;
//     icon: string;
//     max: number;
//     min: number;
// }
//

export interface WeatherType {
  date: string;
  icon: string;
  max: number;
  min: number;
}
