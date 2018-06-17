/**
 * Created by Wenbo on 2018/6/17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 1, name: 'Ter Stegen' },
            { id: 2, name: 'Nélson Semedo' },
            { id: 3, name: 'Gerard Piqué' },
            { id: 4, name: 'Ivan Rakitic' },
            { id: 5, name: 'Sergio Busquets' },
            { id: 6, name: 'Denis Suárez' },
            { id: 8, name: 'Andrés Iniesta' },
            { id: 9, name: 'Luis Suárez' },
            { id: 10, name: 'Lionel Messi' },
            { id: 11, name: 'O.Dembélé' },
            { id: 13, name: 'Jasper Cillessen' },
            { id: 14, name: 'Philippe Coutinho' },
            { id: 15, name: 'Paulinho' },
            { id: 17, name: 'Francisco Alcácer' },
            { id: 18, name: 'Jordi Alba' },
            { id: 19, name: 'Lucas Digne' },
            { id: 20, name: 'Sergi Roberto' },
            { id: 21, name: 'André Gomes' },
            { id: 22, name: 'Aleix Vidal' },
            { id: 23, name: 'Samuel Umtiti' },
            { id: 24, name: 'Yerry Mina' },
            { id: 25, name: 'T.Vermaelen' },
        ];
        return {players};
    }
}
