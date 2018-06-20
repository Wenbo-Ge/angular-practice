/**
 * Created by Wenbo on 2018/6/17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const players = [
            { id: 1, name: 'Ter Stegen' },
            { id: 2, name: 'N.Semedo' },
            { id: 3, name: 'G.Piqué' },
            { id: 4, name: 'I.Rakitic' },
            { id: 5, name: 'S.Busquets' },
            { id: 6, name: 'D.Suárez' },
            { id: 8, name: 'A.Iniesta' },
            { id: 9, name: 'L.Suárez' },
            { id: 10, name: 'L.Messi' },
            { id: 11, name: 'O.Dembélé' },
            { id: 13, name: 'J.Cillessen' },
            { id: 14, name: 'P.Coutinho' },
            { id: 15, name: 'Paulinho' },
            { id: 17, name: 'F.Alcácer' },
            { id: 18, name: 'J.Alba' },
            { id: 19, name: 'L.Digne' },
            { id: 20, name: 'S.Roberto' },
            { id: 21, name: 'A.Gomes' },
            { id: 22, name: 'A.Vidal' },
            { id: 23, name: 'S.Umtiti' },
            { id: 24, name: 'Y.Mina' },
            { id: 25, name: 'T.Vermaelen' },
        ];
        return {players};
    }
}
