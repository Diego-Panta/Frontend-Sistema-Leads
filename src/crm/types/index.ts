// src/crm/types/index.ts

export interface User {
    id: number;
    name: string;
    email: string;
    sede_id: number;
    roles: string[];
    permissions: string[];
  }
  
  export interface Lead {
    id: number;
    cliente_id: number;
    tipo: 'compra' | 'postventa' | 'repuestos';
    estado: 'nuevo' | 'asignado' | 'en_proceso' | 'cerrado';
    canal: string;
    medio_contacto: string;
    // Campos condicionales
    vehiculo_interes?: string;
    financiamiento?: boolean;
    tiempo_compra?: string;
    placa?: string;
    kilometraje?: number;
    tipo_servicio?: string;
    fecha_cita?: string;
    detalle_consulta?: string;
    // Datos comunes
    created_at: string;
    asesor_id?: number;
  }
  
  export interface Client {
    id: number;
    nombre: string;
    apellido: string;
    tipo_documento: 'DNI' | 'RUC';
    numero_documento: string;
    email: string;
    telefono: string;
    direccion?: string;
  }
  
  export interface Assignment {
    lead_id: number;
    asesor_id: number;
    fecha_asignacion: string;
  }
  
  export interface Sede {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
  }
  
  export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: Record<string, string[]>;
  }