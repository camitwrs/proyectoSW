import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from 'react-icons/io5';

const mockSuppliers = [
    { name: 'Proveedor 1', contact: '+56911111111', request: 'Solicitud 1', reception: 'Recepción 1' },
    { name: 'Proveedor 2', contact: '+56911111111', request: 'Solicitud 2', reception: 'Recepción 2' },
    // Add more mock suppliers here
];

function SupplierView() {
    return (
        <div className="p-4 rounded-lg border border-black">
            <div className="mb-4">
                <h1 className="text-l font-bold">PROVEEDORES</h1>
                <div className="flex justify-between mt-2">
                    <button className="flex items-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Registrar proveedor
                    </button>
                    <button className="flex items-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Registrar pedido
                    </button>
                </div>
            </div>

            <div className="flex px-2 py-2 font-bold justify-center">
                <div className="flex-1">Nombre</div>
                <div className="flex-1">Contacto</div>
                <div className="flex-1">Solicitud</div>
                <div className="flex-1">Recepción</div>
            </div>

            {mockSuppliers.map((supplier, index) => (
                <div key={index} className="flex px-2 py-2 items-center justify-center">
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left" style={{ minWidth: '100px', height: '40px' }}>{supplier.name}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.contact}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.request}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.reception}</div>
                </div>
            ))}
        </div>
    );
}

export default SupplierView;
