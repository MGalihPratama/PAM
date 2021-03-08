import * as action from './redux/action'
import * as type from './redux/tipe'

describe('actions', () => {
    it('should create action to add stock by one', () => {
        const expectedAction = {
            type : type.TAMBAH,
            data : undefined
        }
        expect(action.tambahCounter()).toEqual(expectedAction)
    })
})
describe('actions', () => {
    it('should create action to add stock by one', () => {
        const expectedAction = {
            type : type.KURANG,
            data : undefined
        }
        expect(action.kurangCounter()).toEqual(expectedAction)
    })
})