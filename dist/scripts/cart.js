(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'fernandopuente.myshopify.com',
            storefrontAccessToken: 'eafd329533ec1d08b0822e3e7863af81',
        });
        //// BRUSTALIST
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6634229563464',
                node: document.getElementById('product-component-1658769803809'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: !1,
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#c4c4c4",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px",
                                "padding-left": "23px",
                                "padding-right": "23px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": true
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    
                    
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    "option": {},
                    "cart": {
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        iframe: !1,
                        "text": {
                            
                            title: "Bag",
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        "popup": false
                    },
                    toggle: {
                        iframe: !1,
                        events: {
                            afterInit: function (component) {
                                document.getElementById('shopify-holder').appendChild(component.node);
                            },
                        },
                        contents: {
                            count: !0,
                            icon: !1,
                            title: !0
                        },
                        text: {
                            title: "Bag"
                        },
                        styles: {
                            toggle: {
                                "font-weight": "bold",
                                "background-color": "#c4c4c4",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                }
                            }
                        }
                    },
                },
            });
        });
        //// SUNSET
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6634353983560',
                node: document.getElementById('product-component-1658858493095'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: !1,
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#c4c4c4",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px",
                                "padding-left": "23px",
                                "padding-right": "23px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": true
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    
                    
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    "option": {},
                    "cart": {
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        iframe: !1,
                        "text": {
                            
                            title: "Bag",
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        "popup": false
                    },
                    toggle: {
                        iframe: !1,
                        events: {
                            afterInit: function (component) {
                                document.getElementById('shopify-holder').appendChild(component.node);
                            },
                        },
                        contents: {
                            count: !0,
                            icon: !1,
                            title: !0
                        },
                        text: {
                            title: "Bag"
                        },
                        styles: {
                            toggle: {
                                "font-weight": "bold",
                                "background-color": "#c4c4c4",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                }
                            }
                        }
                    },
                },
            });
        });
        //// COLLAGE
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6634354049096',
                node: document.getElementById('product-component-1658858730485'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        iframe: !1,
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                "font-weight": "bold",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                "background-color": "#c4c4c4",
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                },
                                "border-radius": "26px",
                                "padding-left": "23px",
                                "padding-right": "23px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": true
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    
                    
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "BUY NOW"
                        }
                    },
                    "option": {},
                    "cart": {
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        iframe: !1,
                        "text": {
                            
                            title: "Bag",
                            total: "Subtotal",
                            button: "Checkout"
                        },
                        "popup": false
                    },
                    toggle: {
                        iframe: !1,
                        events: {
                            afterInit: function (component) {
                                document.getElementById('shopify-holder').appendChild(component.node);
                            },
                        },
                        contents: {
                            count: !0,
                            icon: !1,
                            title: !0
                        },
                        text: {
                            title: "Bag"
                        },
                        styles: {
                            toggle: {
                                "font-weight": "bold",
                                "background-color": "#c4c4c4",
                                ":hover": {
                                    "background-color": "#b0b0b0"
                                },
                                ":focus": {
                                    "background-color": "#b0b0b0"
                                }
                            }
                        }
                    },
                },
            });
        });
    }
})();
/*]]>*/