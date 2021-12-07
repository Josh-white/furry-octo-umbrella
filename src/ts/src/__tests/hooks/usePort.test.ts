import {act, renderHook} from "@testing-library/react-hooks";
import {usePort} from "../../hooks/usePort";

describe('usePort', () => {
    it('should return 5 ships',  () => {
        const {result} = renderHook(() => usePort())

        expect(result.current.port).toHaveLength(5)
    });

    it('should return the shipName and size of ship',  () => {
        const {result} = renderHook(() => usePort())

        expect(result.current.port[0]).toEqual({shipName: 'carrier', size: 5})
        expect(result.current.port[1]).toEqual({shipName: 'battleship', size: 4})
        expect(result.current.port[2]).toEqual({shipName: 'cruiser', size: 3})
        expect(result.current.port[3]).toEqual({shipName: 'submarine', size: 3})
        expect(result.current.port[4]).toEqual({shipName: 'destroyer', size: 2})
    });

    it('removeShip should remove the correct ship from the port',  () => {
        const {result} = renderHook(() => usePort())

        act(() => {
            result.current.removeShip("carrier")
        })

        expect(result.current.port).toHaveLength(4)
        expect(result.current.port[0]).toEqual({shipName: "battleship", size: 4})
    });

})