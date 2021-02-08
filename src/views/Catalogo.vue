<template>
    <div>
        <CardProductVue v-for="(producto, index) in catalogo" :key="index" :url="producto.url" :nombre="producto.nombre" :descripcion="producto.descripcion" :index="index"/>
    </div>
</template>

<script>
import CardProductVue from '../components/CardProduct.vue'

export default {
    name: 'Catalogo',
    data() {
        return {
            catalogo:[
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711704/tapiceria-soto/8e287c8e-5205-41fd-9e93-f1dd9905b9f1_f9nd9q.jpg',
                    nombre: 'MODELO 3,2,1 + SHAYLOM',
                    precio: 1700,
                    descripcion: {
                        color: 'A escoger',
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711704/tapiceria-soto/4f520a54-5493-44ec-9205-0ec2143774cd_b9ljhh.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711704/tapiceria-soto/7cad36d2-2a3b-4e8d-b220-c56d283dc169_xwfuut.jpg',
                    nombre: 'MODELO 3,2,1 TREYCI',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/1b951b38-b650-4f02-8ad8-90abf00d5e83_wse6za.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/c21844b2-5488-40e2-9417-dd20181cc2f6_l1kmuj.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/cde140bd-1ccd-41f2-bb0a-35ee3300860b_pj5hkb.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 2100,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/e1832ee2-327d-49d4-b5fb-a9d0028e1f52_sh1wgx.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/bf050281-b7bc-4fcc-afe4-a7c44ca5de18_kta8ts.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/af7086cf-8f55-411d-8fff-6c96791bcfef_igg3i8.jpg',
                    nombre: 'MODELO CANGREJO 3,2,1 ORIGINAL',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1750,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/92315292-c761-4ee8-8c8b-22df3b90b217_rkdcf9.jpg',
                    nombre: 'SOFÁ TREYCI 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/9982e0f8-e408-45a3-9aea-e368c151eb1d_tlapx0.jpg',
                    nombre: 'MODELO GALA 3,2,1 E INDIVIDUAL RECLINABLE',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1800,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/31df477c-8500-49f4-b526-13e5a21d4421_wbwtxf.jpg',
                    nombre: 'MODELO VINTAGE 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/535f5ca0-7466-4ed4-9f5c-7a726f4fa3d3_a9jofg.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/7853c23b-1b86-43d1-85dc-193988d84434_bj3jor.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711701/tapiceria-soto/23b8abd9-3f32-4670-9b11-7c59a9efbb73_crpoaa.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1800,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/8fd6d98c-c503-435e-82ad-984a9f4c9ff2_lf2h3i.jpg',
                    nombre: 'MODELO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711702/tapiceria-soto/27b89849-fec9-4d6f-9ca5-eaf750af9c4e_wpvx9j.jpg',
                    nombre: 'MODELO CANGREJO 3,2,1',
                    descripcion: {
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
                {
                    url: 'https://res.cloudinary.com/christiancode99/image/upload/v1612711703/tapiceria-soto/a9e6ba93-973c-49ab-b855-d462b480d0e3_ijolie.jpg',
                    nombre: 'MODELO VINTAGE 3,2,1',
                    descripcion: {
                        detalles:'Aquí comienza tu texto. Puedes hacer clic en este punto y empezar a escribir. Accusantium doloremque laudantium totam rem.',
                        color: 'A escoger',
                        precio: 1700,
                        tamaño: {
                            triple: {
                                width: 80,
                                height: 85,
                                long: 2
                            },
                            doble: {
                                height: 1.5
                            },
                            individual:{
                                height: 1
                            }
                        }
                    }
                },
            ]
        }
    },
    components:{
        CardProductVue
    }
}
</script>
