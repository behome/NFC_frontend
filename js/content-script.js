(function(b) {
    function r(b, c, d) {
        function e(b) {
            b = /^(?:(.*):)?(.*)$/.exec(b);
            return {
                namespace: r.namespaces[b[1]],
                shortName: b[2]
            }
        }

        function l(b, a) {
            if (Array.isArray(b)) {
                var k = c.createDocumentFragment();
                Array.forEach(arguments, function(b) {
                    k.appendChild(l.apply(null, b))
                });
                return k
            }
            var f = e(b),
                q = c.createElementNS(f.namespace || r.defaultNamespace, f.shortName),
                m;
            for (m in a)
                if (f = a[m], d && "key" == m) d[f] = q;
                else {
                    var g = e(m);
                    "function" == typeof f ? q.addEventListener(m.replace(/^on/, ""), f, !1) : q.setAttributeNS(g.namespace || "", g.shortName, f)
                }
            Array.prototype.slice.call(arguments, 2).forEach(function(b) {
                null != b && q.appendChild(b instanceof c.defaultView.Node ? b : Array.isArray(b) ? l.apply(null, b) : c.createTextNode(b))
            });
            return q
        }
        return l.apply(null, b)
    }

    function D() {
        function a() {
            b.thisExplorer.runtime.sendMessage({
                sendProductReport: 1,
                source: b.com_xuanyouwang_product.websiteId,
                id: b.com_xuanyouwang_product.itemId,
                name: b.com_xuanyouwang_product.name,
                code: b.com_xuanyouwang_config.settings.detailReportCode,
                totalCount: b.com_xuanyouwang_product.defaultCommentNum,
                doubtfulCount: b.com_xuanyouwang_product.doubtCommentNum,
                fakeComment: b.com_xuanyouwang_product.commentDoubtful,
                reason: b.com_xuanyouwang_product.commentDoubtfulReason,
                productId: b.com_xuanyouwang_product.productId,
                sourceId: b.com_xuanyouwang_product.sourceId,
                historyFakeReportTime: b.com_xuanyouwang_config.settings.historyFakeReportTime,
                historyFakeCode: b.com_xuanyouwang_config.settings.historyFakeCode,
                historyFakeReason: b.com_xuanyouwang_config.settings.historyFakeReason
            }, function(a) {
                alert(a.result);
                b.com_xuanyouwang_product.sendProductInspectReport = 1
            })
        }
        var c = ["html:div", {
                "class": "xuanyou_footbar"
            },
            ["html:div", {
                    id: "xuanyou_advertise"
                },
                ["html:i", {
                    "class": "xuanyou_img",
                    id: "xuanyou_advertClose"
                }],
                ["html:a", {
                    id: "xuanyou_advTitle",
                    href: "http://s.click.taobao.com/5LuZPPx",
                    target: "_blank"
                }, "双11红包"],
                ["html:a", {
                    id: "xuanyou_advertImg",
                    href: "http://s.click.taobao.com/5LuZPPx",
                    target: "_blank"
                }, " "]
            ],
            ["html:div", {
                    "class": "xuanyou_left"
                },
                ["html:a", {
                        href: "http://www.xuanyouwang.com",
                        target: "_blank"
                    },
                    ["html:div", {
                        id: "xuanyou_logo",
                        "class": "xuanyou_img"
                    }]
                ],
                ["html:i", {
                    "class": "xuanyou_img xuanyou_split"
                }],
                ["html:a", {
                        href: b.com_xuanyouwang_status.extension.baseURL + "options.html",
                        target: "_blank"
                    },
                    ["html:div", {
                            id: "xuanyou_config",
                            "class": "xuanyou_citem"
                        },
                        ["html:i", {
                            "class": "xuanyou_img"
                        }], "设置"
                    ]
                ],
                ["html:i", {
                    "class": "xuanyou_img xuanyou_split"
                }],
                ["html:div", {
                        id: "xuanyou_share",
                        "class": "xuanyou_citem"
                    },
                    ["html:i", {
                        "class": "xuanyou_img"
                    }], "分享", ["html:div", {
                            id: "xuanyou_sharePart"
                        },
                        ["html:a", {
                                href: "http://www.xuanyouwang.com/share.php?to=qzone",
                                target: "_blank"
                            },
                            ["html:div", {
                                    id: "xuanyou_qzoneShare",
                                    "class": "xuanyou_shareItem"
                                },
                                ["html:i", {
                                    "class": "xuanyou_img"
                                }],
                                ["html:span", {}, "QQ空间"]
                            ]
                        ],
                        ["html:a", {
                                href: "http://www.xuanyouwang.com/share.php?to=weibo",
                                target: "_blank"
                            },
                            ["html:div", {
                                    id: "xuanyou_weiboShare",
                                    "class": "xuanyou_shareItem"
                                },
                                ["html:i", {
                                    "class": "xuanyou_img"
                                }],
                                ["html:span", {}, "微博"]
                            ]
                        ],
                        ["html:a", {
                                href: "http://www.xuanyouwang.com/share.php?to=douban",
                                target: "_blank"
                            },
                            ["html:div", {
                                    id: "xuanyou_doubanShare",
                                    "class": "xuanyou_shareItem"
                                },
                                ["html:i", {
                                    "class": "xuanyou_img"
                                }],
                                ["html:span", {}, "豆瓣"]
                            ]
                        ],
                        ["html:a", {
                                href: "http://www.xuanyouwang.com/share.php?to=qq",
                                target: "_blank"
                            },
                            ["html:div", {
                                    id: "xuanyou_qqShare",
                                    "class": "xuanyou_shareItem"
                                },
                                ["html:i", {
                                    "class": "xuanyou_img"
                                }],
                                ["html:span", {}, "QQ"]
                            ]
                        ]
                    ],
                    ["html:div", {
                            "class": "xuanyou_arrowCover"
                        },
                        ["html:div", {
                            "class": "xuanyou_downArrow"
                        }]
                    ]
                ],
                ["html:i", {
                    "class": "xuanyou_img xuanyou_split"
                }],
                ["html:a", {
                        href: "http://www.xuanyouwang.com/magazine.php",
                        target: "_blank"
                    },
                    ["html:div", {
                            id: "xuanyou_suggest",
                            "class": "xuanyou_citem"
                        },
                        ["html:i", {
                            "class": "xuanyou_img"
                        }], "攻略"
                    ]
                ],
                ["html:i", {
                    "class": "xuanyou_img xuanyou_split"
                }],
                ["html:ul", {
                        id: "xuanyou_functionList"
                    },
                    ["html:li", {},
                        ["html:div", {
                                id: "xuanyou_comments",
                                "class": "xuanyou_item"
                            },
                            ["html:i", {
                                "class": "xuanyou_img"
                            }], "评价按真实性分类", ["html:div", {
                                    "class": "xuanyou_numHint"
                                },
                                ["html:span", {}]
                            ],
                            ["html:div", {
                                    id: "xuanyou_comContent"
                                },
                                ["html:div", {
                                        id: "xuanyou_comHeader"
                                    },
                                    ["html:span", {
                                        id: "xuanyou_productGrade"
                                    }],
                                    ["html:span", {
                                        id: "xuanyou_commentType"
                                    }, "最客观评论（智能筛选的结果，", ["html:a", {
                                        href: "http://www.xuanyouwang.com/advice.php",
                                        target: "_blank",
                                        "class": "xuanyou_errorReport"
                                    }, "点击这里报错，让我更好地服务您）"]],
                                    ["html:a", {
                                        href: "http://www.xuanyouwang.com/help.php?aid=0&zid=191",
                                        target: "_blank",
                                        "class": "xuanyou_comHint"
                                    }, "什么样的商品评论比较真实？"]
                                ],
                                ["html:div", {
                                    id: "xuanyou_sincereCom",
                                    "class": "xuanyou_comDetails"
                                }, "    暂时没有找到最客观评论。"],
                                ["html:div", {
                                    id: "xuanyou_sosoCom",
                                    "class": "xuanyou_comDetails"
                                }, "    暂时没有找到中评。"],
                                ["html:div", {
                                    id: "xuanyou_badCom",
                                    "class": "xuanyou_comDetails"
                                }, "    暂时没有找到差评。"],
                                ["html:div", {
                                    id: "xuanyou_normalCom",
                                    "class": "xuanyou_comDetails"
                                }, "    暂时没有找到真假难辨的评论。"],
                                ["html:div", {
                                    id: "xuanyou_doubtCom",
                                    "class": "xuanyou_comDetails"
                                }, "    暂时没有找到可疑的评论。"],
                                ["html:div", {
                                        id: "xuanyou_comTags"
                                    },
                                    ["html:div", {
                                        id: "xuanyou_sincereTag",
                                        "class": "xuanyou_comTag"
                                    }, "最客观评论(0)"],
                                    ["html:div", {
                                        id: "xuanyou_sosoTag",
                                        "class": "xuanyou_comTag"
                                    }, "可信的中评(0)"],
                                    ["html:div", {
                                        id: "xuanyou_badTag",
                                        "class": "xuanyou_comTag"
                                    }, "可信的差评(0)"],
                                    ["html:div", {
                                        id: "xuanyou_normalTag",
                                        "class": "xuanyou_comTag"
                                    }, "真假难辨的评论(0)"],
                                    ["html:div", {
                                        id: "xuanyou_doubtTag",
                                        "class": "xuanyou_comTag"
                                    }, "可疑的评论(0)"]
                                ]
                            ],
                            ["html:div", {
                                    "class": "xuanyou_arrowCover"
                                },
                                ["html:div", {
                                    "class": "xuanyou_downArrow"
                                }]
                            ]
                        ],
                        ["html:div", {
                            "class": "xuanyou_warning",
                            id: "xuanyou_fakeWarning"
                        }]
                    ],
                    ["html:i", {
                        "class": "xuanyou_img xuanyou_split"
                    }]
                ],
                ["html:div", {
                        "class": "xuanyou_search",
                        id: "xuanyou_goodSearch"
                    },
                    ["html:form", {
                            "class": "xuanyou_searchForm",
                            action: "javascript:void(0)",
                            enctype: "multipart/form-data",
                            method: "post",
                            "accept-charset": "UTF-8"
                        },
                        ["html:div", {
                                "class": "xuanyou_searchOrder"
                            },
                            ["html:i", {
                                "class": "xuanyou_img"
                            }], "搜索", ["html:select", {
                                    "class": "xuanyou_searchDes",
                                    name: "xuanyou_searchType"
                                },
                                ["html:option", {
                                    value: "4-1"
                                }, "金牌卖家"],
                                ["html:option", {
                                    value: "4-2"
                                }, "放心店铺"],
                                ["html:option", {
                                    value: "4-9"
                                }, "特色网店"],
                                ["html:option", {
                                    value: "6-41"
                                }, "最好看/好吃的商品"],
                                ["html:option", {
                                    value: "6-44"
                                }, "性价比最高的商品"],
                                ["html:option", {
                                    value: "6-11"
                                }, "服务最好的商品"],
                                ["html:option", {
                                    value: "6-46",
                                    selected: "selected"
                                }, "质量最好的商品"],
                                ["html:option", {
                                    value: "6-40"
                                }, "总体最好的商品"]
                            ]
                        ],
                        ["html:input", {
                            "class": "xuanyou_keyword",
                            name: "keyword",
                            type: "text",
                            placeholder: "输入商品",
                            value: "",
                            autocomplete: "off",
                            "aria-autocomplete": "list"
                        }],
                        ["html:input", {
                            "class": "xuanyou_searchbtn xuanyou_img",
                            type: "submit",
                            value: ""
                        }],
                        ["html:input", {
                            type: "hidden",
                            name: "keyFrom",
                            "class": "keyFrom",
                            value: "chromebottom"
                        }],
                        ["html:input", {
                            type: "hidden",
                            name: "typeId",
                            "class": "typeId",
                            value: "6"
                        }],
                        ["html:input", {
                            type: "hidden",
                            name: "shopType",
                            "class": "shopType",
                            value: "0"
                        }]
                    ],
                    ["html:div", {
                            "class": "xuanyou_itemIntro",
                            id: "xuanyou_searchItemIntro"
                        },
                        ["html:div", {
                            "class": "xuanyou_introContent"
                        }, "在这里可以用多种方法搜索好商品和好网店"],
                        ["html:div", {
                                "class": "xuanyou_arrowCover"
                            },
                            ["html:div", {
                                "class": "xuanyou_downArrow"
                            }]
                        ]
                    ]
                ],
                ["html:i", {
                    "class": "xuanyou_img xuanyou_split",
                    id: "xuanyou_lastSplit"
                }],
                ["html:div", {
                        id: "xuanyou_app",
                        "class": "xuanyou_citem"
                    },
                    ["html:i", {
                        "class": "xuanyou_img",
                        id: "xuanyou_appIndImg"
                    }],
                    ["html:a", {
                        href: "http://www.xuanyouwang.com/goodCmtAnalysis.php",
                        target: "_blank"
                    }, "下载手机APP"],
                    ["html:div", {
                            id: "xuanyou_appArea"
                        },
                        ["html:div", {
                                "class": "xuanyou_appItem"
                            },
                            ["html:a", {
                                    href: "http://www.xuanyouwang.com/goodCmtAnalysis.php",
                                    target: "_blank"
                                },
                                ["html:div", {
                                    id: "xuanyou_android_barcode",
                                    "class": "xuanyou_appImg"
                                }]
                            ],
                            ["html:span", {},
                                ["html:i", {
                                    "class": "xuanyou_img",
                                    id: "xuanyou_androidTypeImg"
                                }], "安卓版"
                            ]
                        ]
                    ],
                    ["html:div", {
                            "class": "xuanyou_arrowCover"
                        },
                        ["html:div", {
                            "class": "xuanyou_downArrow"
                        }]
                    ]
                ],
                ["html:div", {
                    id: "xuanyou_notice"
                }]
            ],
            ["html:div", {
                    "class": "xuanyou_right"
                },
                ["html:div", {
                    id: "xuanyou_min",
                    title: "最小化",
                    "class": "xuanyou_img"
                }],
                ["html:div", {
                    id: "xuanyou_max",
                    title: "最大化",
                    "class": "xuanyou_img"
                }]
            ]
        ];
        document.body.appendChild(r(c, document, {}));
        if (3 > b.com_xuanyouwang_product.websiteId) {
            var d = document.getElementById("xuanyou_functionList"),
                e = ["html:i", {
                    "class": "xuanyou_img xuanyou_split"
                }],
                c = ["html:li", {},
                    ["html:div", {
                            id: "xuanyou_recommend",
                            "class": "xuanyou_item"
                        },
                        ["html:i", {
                            "class": "xuanyou_img"
                        }], "相似推荐", ["html:span", {
                            id: "xuanyou_optDes"
                        }, "（质量最好）"],
                        ["html:div", {
                                "class": "xuanyou_numHint"
                            },
                            ["html:span", {}]
                        ],
                        ["html:div", {
                                id: "xuanyou_recContent"
                            },
                            ["html:span", {
                                "class": "xuanyou_tips"
                            }, "正在查找相似推荐……"],
                            ["html:ul", {
                                "class": "xuanyou_recomProducts"
                            }]
                        ],
                        ["html:div", {
                                "class": "xuanyou_arrowCover"
                            },
                            ["html:div", {
                                "class": "xuanyou_downArrow"
                            }]
                        ]
                    ],
                    ["html:div", {
                            "class": "xuanyou_itemIntro",
                            id: "xuanyou_recomItemIntro"
                        },
                        ["html:div", {
                            "class": "xuanyou_introContent"
                        }, "以下是根据您的偏好推荐的商品（", ["html:a", {
                            href: b.com_xuanyouwang_status.extension.baseURL + "options.html",
                            target: "_blank"
                        }, "设置我的偏好"], "）", ["html:div", {
                                "class": "xuanyou_arrowCover"
                            },
                            ["html:div", {
                                "class": "xuanyou_downArrow"
                            }]
                        ]]
                    ]
                ];
            d.appendChild(r(c, document, {}));
            d.appendChild(r(e, document, {}));
            c = ["html:li", {},
                ["html:div", {
                        id: "xuanyou_cheap",
                        "class": "xuanyou_item"
                    },
                    ["html:i", {
                        "class": "xuanyou_img"
                    }],
                    ["html:span", {
                        id: "xuanyou_saorsim"
                    }, "相似推荐"], "（最便宜）", ["html:div", {
                            "class": "xuanyou_numHint"
                        },
                        ["html:span", {}]
                    ],
                    ["html:div", {
                            id: "xuanyou_cheapContent"
                        },
                        ["html:span", {
                            "class": "xuanyou_tips"
                        }, "正在查找相似推荐……"],
                        ["html:ul", {
                            "class": "xuanyou_recomProducts"
                        }]
                    ],
                    ["html:div", {
                            "class": "xuanyou_arrowCover"
                        },
                        ["html:div", {
                            "class": "xuanyou_downArrow"
                        }]
                    ]
                ]
            ];
            d.appendChild(r(c, document, {}));
            d.appendChild(r(e, document, {}));
            c = ["html:li", {},
                ["html:div", {
                        id: "xuanyou_recomShop",
                        "class": "xuanyou_item"
                    },
                    ["html:i", {
                        "class": "xuanyou_img"
                    }], "推荐", ["html:span", {
                        id: "xuanyou_shopType"
                    }, "放心店铺"],
                    ["html:span", {
                        id: "xuanyou_shopSort"
                    }, "（评分最高）"],
                    ["html:div", {
                            "class": "xuanyou_numHint"
                        },
                        ["html:span", {}]
                    ],
                    ["html:div", {
                            id: "xuanyou_shopContent"
                        },
                        ["html:span", {
                            "class": "xuanyou_tips"
                        }, "正在查找相关放心店铺……"],
                        ["html:ul", {
                            "class": "xuanyou_goldShop"
                        }]
                    ],
                    ["html:div", {
                            "class": "xuanyou_arrowCover"
                        },
                        ["html:div", {
                            "class": "xuanyou_downArrow"
                        }]
                    ]
                ],
                ["html:div", {
                        "class": "xuanyou_itemIntro",
                        id: "xuanyou_shopItemIntro"
                    },
                    ["html:div", {
                        "class": "xuanyou_introContent"
                    }, "以下是根据您的偏好推荐的网店（", ["html:a", {
                        href: b.com_xuanyouwang_status.extension.baseURL + "options.html#shop_config",
                        target: "_blank"
                    }, "设置我的偏好"], "）", ["html:div", {
                            "class": "xuanyou_arrowCover"
                        },
                        ["html:div", {
                            "class": "xuanyou_downArrow"
                        }]
                    ]]
                ]
            ];
            d.appendChild(r(c, document, {}));
            d.appendChild(r(e, document, {}))
        }
        0 < b.com_xuanyouwang_config.settings.debug && 0 < b.com_xuanyouwang_config.settings.detailReport && (c = ["html:span", {
            id: "xuanyou_sendReport"
        }, "发送检测报告"], document.getElementById("xuanyou_notice").appendChild(r(c, document, {})));
        c = b.thisExplorer.extension.getURL("../images/imageSprite.gif");
        $(".xuanyou_img").css("background-image", "url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../images/bgImg.png");
        $(".xuanyou_footbar").css("background-image", "url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../images/android_barcode.png");
        $("#xuanyou_android_barcode").css("background-image", "url(" + c + ")");
        var l = (new Date).format("yyyy-MM-dd");
        "2016-11-11" >= l && (void 0 == localStorage.advertShowDate || localStorage.advertShowDate < l) && (c = b.thisExplorer.extension.getURL("../images/advertise8.gif"), $("#xuanyou_advertImg").css("background-image", "url(" + c + ")"), $("#xuanyou_advertise").show());
        void 0 === localStorage.expanded || 1 == localStorage.expanded ? ($("#xuanyou_config").show(), $("#xuanyou_share").show(), $("#xuanyou_min").show(), $("#xuanyou_max").hide(), $(".xuanyou_left").css("width", "100%"), $(".xuanyou_footbar").css("width", "100%")) : ($("#xuanyou_config").hide(), $("#xuanyou_share").hide(), $("#xuanyou_min").hide(), $("#xuanyou_max").show(), $(".xuanyou_left").css("width", "49px"), $(".xuanyou_footbar").css("width", "59px"));
        $("#xuanyou_min").click(function() {
            $("#xuanyou_config").hide();
            $("#xuanyou_share").hide();
            $("#xuanyou_min").hide();
            $("#xuanyou_max").show();
            $(".xuanyou_left").animate({
                width: "49px"
            });
            $(".xuanyou_footbar").animate({
                width: "59px"
            });
            localStorage.expanded = 0;
            y()
        });
        $("#xuanyou_max").click(function() {
            $("#xuanyou_config").show();
            $("#xuanyou_share").show();
            $("#xuanyou_min").show();
            $("#xuanyou_max").hide();
            $(".xuanyou_left").css("width", "100%");
            $(".xuanyou_footbar").animate({
                width: "100%"
            }, "fast", y);
            localStorage.expanded = 1;
            y()
        });
        $("#xuanyou_sendReport").click(function() {
            10 > b.com_xuanyouwang_product.defaultCommentNum && 0 == b.com_xuanyouwang_product.commentDoubtful ? alert("评论数据太少了。") : a()
        });
        $("#xuanyou_share").mouseover(function() {
            $("#xuanyou_sharePart").show();
            $("#xuanyou_share .xuanyou_arrowCover").show()
        });
        $("#xuanyou_share").mouseout(function() {
            $("#xuanyou_sharePart").hide();
            $("#xuanyou_share .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_comments").mouseover(function() {
            $("#xuanyou_comContent").show();
            $("#xuanyou_comments .xuanyou_arrowCover").show();
            $("#xuanyou_fakeWarning").hide();
            $("#xuanyou_fakeWarning .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_comments").mouseout(function() {
            $("#xuanyou_comContent").hide();
            $("#xuanyou_comments .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_price").mouseover(function() {
            $("#xuanyou_priceHistory").css("visibility", "visible");
            $("#xuanyou_price .xuanyou_arrowCover").show()
        });
        $("#xuanyou_price").mouseout(function() {
            $("#xuanyou_priceHistory").css("visibility", "hidden");
            $("#xuanyou_price .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_recommend").mouseover(function() {
            $("#xuanyou_recContent").show();
            $("#xuanyou_recommend .xuanyou_arrowCover").show();
            $("#xuanyou_recomItemIntro").hide();
            $("#xuanyou_recomItemIntro .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_recommend").mouseout(function() {
            $("#xuanyou_recContent").hide();
            $("#xuanyou_recommend .xuanyou_arrowCover").hide();
            $("#xuanyou_recommend .xuanyou_numHint").hide()
        });
        $("#xuanyou_cheap").mouseover(function() {
            $("#xuanyou_cheapContent").show();
            $("#xuanyou_cheap .xuanyou_arrowCover").show()
        });
        $("#xuanyou_cheap").mouseout(function() {
            $("#xuanyou_cheapContent").hide();
            $("#xuanyou_cheap .xuanyou_arrowCover").hide();
            $("#xuanyou_cheap .xuanyou_numHint").hide()
        });
        $("#xuanyou_recomShop").mouseover(function() {
            $("#xuanyou_shopContent").show();
            $("#xuanyou_recomShop .xuanyou_arrowCover").show();
            $("#xuanyou_shopItemIntro").hide();
            $("#xuanyou_shopItemIntro .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_recomShop").mouseout(function() {
            $("#xuanyou_shopContent").hide();
            $("#xuanyou_recomShop .xuanyou_arrowCover").hide();
            $("#xuanyou_recomShop .xuanyou_numHint").hide()
        });
        $("#xuanyou_app").mouseover(function() {
            $("#xuanyou_appArea").show();
            $("#xuanyou_app .xuanyou_arrowCover").show()
        });
        $("#xuanyou_app").mouseout(function() {
            $("#xuanyou_appArea").hide();
            $("#xuanyou_app .xuanyou_arrowCover").hide()
        });
        $(".xuanyou_search").mouseover(function() {
            $("#xuanyou_searchItemIntro").hide();
            $("#xuanyou_searchItemIntro .xuanyou_arrowCover").hide()
        });
        $("#xuanyou_advertise").mouseover(function() {
            $("#xuanyou_advertise i").show();
            $("#xuanyou_advertImg").css("background-position", "-115px 0")
        });
        $("#xuanyou_advertise").mouseout(function() {
            $("#xuanyou_advertise i").hide();
            $("#xuanyou_advertImg").css("background-position", "0 0")
        });
        $("#xuanyou_advertClose").click(function() {
            $("#xuanyou_advertise").hide();
            localStorage.advertShowDate = l
        });
        $("#xuanyou_sincereTag").click(function() {
            $("#xuanyou_sincereCom").show();
            $("#xuanyou_sosoCom").hide();
            $("#xuanyou_badCom").hide();
            $("#xuanyou_normalCom").hide();
            $("#xuanyou_doubtCom").hide();
            $("#xuanyou_sincereTag").css("font-weight", "bold");
            $("#xuanyou_sosoTag").css("font-weight", "normal");
            $("#xuanyou_badTag").css("font-weight", "normal");
            $("#xuanyou_normalTag").css("font-weight", "normal");
            $("#xuanyou_doubtTag").css("font-weight", "normal");
            $("#xuanyou_commentType").text("最客观评论（智能筛选的结果，").append($("<a>", {
                href: "http://www.xuanyouwang.com/advice.php",
                target: "_blank",
                "class": "xuanyou_errorReport",
                text: "点击这里报错，让我更好地服务您）"
            }))
        });
        $("#xuanyou_sosoTag").click(function() {
            $("#xuanyou_sincereCom").hide();
            $("#xuanyou_sosoCom").show();
            $("#xuanyou_badCom").hide();
            $("#xuanyou_normalCom").hide();
            $("#xuanyou_doubtCom").hide();
            $("#xuanyou_sincereTag").css("font-weight", "normal");
            $("#xuanyou_sosoTag").css("font-weight", "bold");
            $("#xuanyou_badTag").css("font-weight", "normal");
            $("#xuanyou_normalTag").css("font-weight", "normal");
            $("#xuanyou_doubtTag").css("font-weight", "normal");
            $("#xuanyou_commentType").text("可信的中评（智能筛选的结果，").append($("<a>", {
                href: "http://www.xuanyouwang.com/advice.php",
                target: "_blank",
                "class": "xuanyou_errorReport",
                text: "点击这里报错，让我更好地服务您）"
            }))
        });
        $("#xuanyou_badTag").click(function() {
            $("#xuanyou_sincereCom").hide();
            $("#xuanyou_sosoCom").hide();
            $("#xuanyou_badCom").show();
            $("#xuanyou_normalCom").hide();
            $("#xuanyou_doubtCom").hide();
            $("#xuanyou_sincereTag").css("font-weight", "normal");
            $("#xuanyou_sosoTag").css("font-weight", "normal");
            $("#xuanyou_badTag").css("font-weight", "bold");
            $("#xuanyou_normalTag").css("font-weight", "normal");
            $("#xuanyou_doubtTag").css("font-weight", "normal");
            $("#xuanyou_commentType").text("可信的差评（智能筛选的结果，").append($("<a>", {
                href: "http://www.xuanyouwang.com/advice.php",
                target: "_blank",
                "class": "xuanyou_errorReport",
                text: "点击这里报错，让我更好地服务您）"
            }))
        });
        $("#xuanyou_normalTag").click(function() {
            $("#xuanyou_sincereCom").hide();
            $("#xuanyou_sosoCom").hide();
            $("#xuanyou_badCom").hide();
            $("#xuanyou_normalCom").show();
            $("#xuanyou_doubtCom").hide();
            $("#xuanyou_sincereTag").css("font-weight", "normal");
            $("#xuanyou_sosoTag").css("font-weight", "normal");
            $("#xuanyou_badTag").css("font-weight", "normal");
            $("#xuanyou_normalTag").css("font-weight", "bold");
            $("#xuanyou_doubtTag").css("font-weight", "normal");
            $("#xuanyou_commentType").text("真假难辨的评论（智能筛选的结果，").append($("<a>", {
                href: "http://www.xuanyouwang.com/advice.php",
                target: "_blank",
                "class": "xuanyou_errorReport",
                text: "点击这里报错，让我更好地服务您）"
            }))
        });
        $("#xuanyou_doubtTag").click(function() {
            $("#xuanyou_sincereCom").hide();
            $("#xuanyou_sosoCom").hide();
            $("#xuanyou_badCom").hide();
            $("#xuanyou_normalCom").hide();
            $("#xuanyou_doubtCom").show();
            $("#xuanyou_sincereTag").css("font-weight", "normal");
            $("#xuanyou_sosoTag").css("font-weight", "normal");
            $("#xuanyou_badTag").css("font-weight", "normal");
            $("#xuanyou_normalTag").css("font-weight", "normal");
            $("#xuanyou_doubtTag").css("font-weight", "bold");
            $("#xuanyou_commentType").text("可疑的评论（智能筛选的结果，").append($("<a>", {
                href: "http://www.xuanyouwang.com/advice.php",
                target: "_blank",
                "class": "xuanyou_errorReport",
                text: "点击这里报错，让我更好地服务您）"
            }))
        });
        $(".xuanyou_searchForm").submit(function() {
            var a = $(this).find(".xuanyou_keyword").val(),
                c = /^\s+$/;
            if (1 > a.length || c.test(a)) return !1;
            c = $(this).find(".xuanyou_searchDes").val();
            void 0 === c && (c = "");
            var d = $(this).find(".keyFrom").val();
            b.thisExplorer.runtime.sendMessage({
                search: 1,
                searchType: c,
                keyFrom: d,
                keyword: a
            }, function(b) {})
        });
        $(window).resize(function() {
            y()
        })
    }

    function E(a) {
        var c, d = a.good,
            e = 0,
            l = 0,
            n = b.com_xuanyouwang_modules.getSearchClass(b.com_xuanyouwang_product.name),
            h = parseInt(com_xuanyouwang_modules.getPreferOrder(n.classId)),
            k = h,
            f = 0;
        243 == n.classId ? f = 1 : 242 == n.classId && /(\u8f85\u98df|\u8425\u517b|\u8c03\u5473|\u5976\u7c89|\u6eb6\u8c46|\u8089\u80a0|\u5976\u7247|\u76ca\u751f\u83cc|\u9499\u94c1\u950c|DHA|\u725b\u521d\u4e73)/g.test(n.word) && (f = 1);
        d.sort(function(b, a) {
            var c = "",
                d = 1;
            switch (h) {
                case 1:
                    c = "param2";
                    break;
                case 2:
                    c = "param3";
                    break;
                case 3:
                    c = "param4";
                    break;
                case 4:
                    c = "param5";
                    break;
                case 5:
                    c = "grade", d = -1
            }
            var e = b[c] ? parseInt(b[c]) : 0,
                c = a[c] ? parseInt(a[c]) : 0;
            return e > c ? -1 * d : e == c ? (aGrade = Math.round(100 * parseFloat(b.pGrade)), bGrade = Math.round(100 * parseFloat(a.pGrade)), aGrade > bGrade ? -1 : aGrade == bGrade ? (aNum = parseInt(b.comNum), bNum = parseInt(a.comNum), aNum > bNum ? -1 : aNum == bNum ? 0 : 1) : 1) : d
        });
        var q = document.getElementById("xuanyou_recContent").getElementsByClassName("xuanyou_recomProducts")[0];
        c = [];
        var m = "",
            g;
        for (g in d) {
            e++;
            c = d[g].photo;
            3 > d[g].websiteId && 0 > d[g].photo.indexOf(".jpg_") && (c += "_250x250.jpg");
            switch (d[g].websiteId) {
                case "1":
                    m = "https://item.taobao.com/item.htm?id=" + d[g].itemId;
                    break;
                case "2":
                    m = "https://detail.tmall.com/item.htm?id=" + d[g].itemId;
                    break;
                default:
                    m = "https://item.taobao.com/item.htm?id=" + d[g].itemId
            }
            0 < b.com_xuanyouwang_config.settings.debug && (m = b.com_xuanyouwang_config.settings.baseUrl + "autoTransfer.php?website=" + d[g].websiteId + "&id=" + d[g].itemId + "&browser=" + b.com_xuanyouwang_config.settings.browser);
            var w = "";
            1 == h ? (w = 0 < d[g].param2 ? d[g].comNum + "人中有" + d[g].param2 + "%说它" + (f ? "好吃" : "好看") : d[g].pGrade + "分，" + d[g].comNum + "人评价", 0 < d[g].param2 && l++) : 2 == h ? (w = 0 < d[g].param3 ? d[g].comNum + "人中有" + d[g].param3 + "%说它性价比高" : d[g].pGrade + "分，" + d[g].comNum + "人评价", 0 < d[g].param3 && l++) : 3 == h ? (w = 0 < d[g].param4 ? d[g].comNum + "人中有" + d[g].param4 + "%说商家服务好" : d[g].pGrade + "分，" + d[g].comNum + "人评价", 0 < d[g].param4 && l++) : 4 == h ? (w = 0 < d[g].param5 ? d[g].comNum + "人中有" + d[g].param5 + "%说它质量好" : d[g].pGrade + "分，" + d[g].comNum + "人评价", 0 < d[g].param5 && l++) : 5 == h ? (w = 501 > d[g].grade ? "总体口碑得分： " + (1001 - d[g].grade) + "分" : d[g].pGrade + "分，" + d[g].comNum + "人评价", 501 > d[g].grade && l++) : 0 == h && (w = d[g].pGrade + "分，" + d[g].comNum + "人评价");
            c = ["html:li", {},
                ["html:a", {
                        href: m,
                        target: "_blank"
                    },
                    ["html:img", {
                        src: c,
                        alt: d[g].name
                    }],
                    ["html:p", {
                            title: d[g].name
                        },
                        d[g].name
                    ]
                ],
                ["html:div", {
                        "class": "xuanyou_productPrice"
                    },
                    ["html:b", {}, "￥"], d[g].price
                ],
                ["html:p", {},
                    w
                ]
            ];
            q.appendChild(r(c, document, {}))
        }
        c = b.com_xuanyouwang_config.settings.baseUrl + "search.php?keyword=" + encodeURI(b.com_xuanyouwang_product.name) + "&typeId=6&count=5&keyfrom=chromemore";
        c = ["html:li", {},
            ["html:a", {
                    href: c,
                    target: "_blank"
                },
                ["html:img", {
                    src: b.com_xuanyouwang_status.extension.baseURL + "images/orange-plus-hi.gif",
                    alt: "查看更多推荐"
                }],
                ["html:p", {
                    style: "height:60px;"
                }, "查看更多口碑不错的相似商品（评分4.7分以上，累计评价100个以上）"]
            ],
            ["html:div", {
                "class": "xuanyou_productPrice"
            }]
        ];
        0 == l && $("#xuanyou_optDes").text("(评分最高)");
        e ? ($("#xuanyou_recContent").css("width", "1760px").css("height", "240px").css("margin-left", "-338px"), $("#xuanyou_recContent .xuanyou_tips").remove(), q.appendChild(r(c, document, {})), $("#xuanyou_recommend .xuanyou_numHint span").text(e), c = $("#xuanyou_recommend").width(), $("#xuanyou_recommend .xuanyou_numHint").css("left", c - 5 + "px"), $("#xuanyou_recommend .xuanyou_numHint").show()) : $("#xuanyou_recContent").css("width", "200px").css("height", "70px").css("margin-left", "0").text("暂时没有找到相似推荐。");
        f = a.shop;
        q = 0;
        m = "";
        d = document.getElementById("xuanyou_shopContent").getElementsByClassName("xuanyou_goldShop")[0];
        for (g in f) q++, c = f[g].photo.replace("../../", b.com_xuanyouwang_config.settings.baseUrl), 0 < f[g].param1 && 5 >= f[g].param1 ? m = f[g].param1 + "钻" : 5 < f[g].param1 && 10 >= f[g].param1 ? m = f[g].param1 - 5 + "皇冠" : 10 < f[g].param1 && (m = f[g].param1 - 10 + "金冠"), c = ["html:li", {},
            ["html:div", {
                    "class": "xuanyou_shopImg"
                },
                ["html:a", {
                        href: b.com_xuanyouwang_config.settings.baseUrl + "tuijianxx.php?tjid=" + f[g].id + "&autotrans=1&browser=" + b.com_xuanyouwang_config.settings.browser,
                        target: "_blank"
                    },
                    ["html:img", {
                        src: c,
                        alt: f[g].name
                    }],
                    ["html:p", {},
                        f[g].name
                    ]
                ]
            ],
            ["html:p", {
                    "class": "xuanyou_shopInfo"
                },
                ["html:img", {
                    src: b.com_xuanyouwang_status.extension.baseURL + "images/s_grade_" + f[g].param1 + ".gif",
                    alt: m
                }],
                ["html:span", {}, " " + f[g].shopRate + "%"]
            ]
        ], d.appendChild(r(c, document, {}));
        c = 2;
        g = "放心店铺";
        switch (parseInt(b.com_xuanyouwang_config.options.goldShopType)) {
            case 1:
                c = 1;
                g = "金牌卖家";
                break;
            case 2:
                c = 2;
                g = "放心店铺";
                break;
            case 3:
                c = 9, g = "特色网店"
        }
        f = "（按综合评分排序）";
        h = 0;
        switch (parseInt(b.com_xuanyouwang_config.options.goldShopSort)) {
            case 1:
                h = 7;
                f = "（按相关性排序）";
                break;
            case 2:
                h = 0;
                f = "（按综合评分排序）";
                break;
            case 3:
                h = 1;
                f = "（按好评率排序）";
                break;
            case 4:
                h = 2;
                f = "（按信用等级排序）";
                break;
            case 5:
                h = 3;
                f = "（按销量排序）";
                break;
            case 6:
                h = 4;
                f = "（按描述相符得分排序）";
                break;
            case 7:
                h = 5;
                f = "（按服务态度得分排序）";
                break;
            case 8:
                h = 6, f = "（按物流服务得分排序）"
        }
        c = b.com_xuanyouwang_config.settings.baseUrl + "search.php?keyword=" + encodeURI(n.word) + "&typeId=4&shopType=" + c + "&sort=" + h + "&keyfrom=chromemore";
        c = ["html:li", {},
            ["html:div", {
                    "class": "xuanyou_shopImg"
                },
                ["html:a", {
                        href: c,
                        target: "_blank"
                    },
                    ["html:img", {
                        src: b.com_xuanyouwang_status.extension.baseURL + "images/orange-plus-hi.gif",
                        alt: "查看更多优秀网店"
                    }],
                    ["html:p", {
                        style: "height:40px;line-height:20px;padding-top:5px;"
                    }, "查看更多与" + n.word + "有关的" + g + f]
                ]
            ],
            ["html:div", {
                "class": "xuanyou_shopInfo"
            }]
        ];
        q ? ($("#xuanyou_shopContent").css("width", "1760px").css("height", "220px").css("margin-left", "-625px"), $("#xuanyou_shopContent .xuanyou_tips").remove(), d.appendChild(r(c, document, {})), $("#xuanyou_recomShop .xuanyou_numHint span").text(q), c = $("#xuanyou_recomShop").width(), $("#xuanyou_recomShop .xuanyou_numHint").css("left", c - 5 + "px"), $("#xuanyou_recomShop .xuanyou_numHint").show()) : $("#xuanyou_shopContent").css("width", "200px").css("height", "70px").css("margin-left", "0").text("暂时没有找到相关的" + g + "。");
        n = b.com_xuanyouwang_status.extension.baseURL + "images/taobaoShop.gif";
        $(".xuanyou_shopImg img").css("background-image", "url(" + n + ")");
        y();
        0 == b.com_xuanyouwang_status.extension.itemTipShow && (0 != e && 0 != k && 0 != l || $("#xuanyou_recomItemIntro").html(""), 0 == q && $("#xuanyou_shopItemIntro").html(""), $(".xuanyou_itemIntro").show(), $(".xuanyou_itemIntro .xuanyou_arrowCover").show());
        0 < a.fake && A(a);
        return !0
    }

    function A(a) {
        if (!a.fake) return !1;
        var c = "";
        if (0 < a.desc.length) c = a.desc;
        else switch (a.fake) {
            case "1":
                c = "我们发现此商品不同的买家发表了相似或相同的较长评论，很像刷单。";
                break;
            case "2":
                c = "我们发现此商品有买家在短期内发表了8次以上的好评，或者一天内发表了3次以上的好评，这样做很像刷单。";
                break;
            case "3":
                c = "我们发现此商品某买家的追评和初评内容相同或相似，很像刷单。"
        }
        b.com_xuanyouwang_config.settings.historyFakeReportTime = a.time;
        b.com_xuanyouwang_config.settings.historyFakeCode = a.fake;
        b.com_xuanyouwang_config.settings.historyFakeReason = c;
        var d = (new Date).format("yyyy-MM-dd"),
            e = a.time.substring(0, 10);
        90 < b.com_xuanyouwang_modules.dateDiff(d, e) && (b.com_xuanyouwang_config.settings.historyWarning = 0);
        b.com_xuanyouwang_config.settings.historyWarning && ($("#xuanyou_fakeWarning").html(""), jsonContent = ["html:div", {
            "class": "xuanyou_introContent"
        }, "提示：我们于" + a.time + "检测到这个商品疑似有刷单等评价造假行为。刷单的也有好商品，可以考虑购买，但需要提高警惕，不轻信好评，谨防上当。依据：" + c, ["html:div", {
                "class": "xuanyou_arrowCover"
            },
            ["html:div", {
                "class": "xuanyou_downArrow"
            }]
        ]], document.getElementById("xuanyou_fakeWarning").appendChild(r(jsonContent, document, {})), $("#xuanyou_fakeWarning").show(), $("#xuanyou_fakeWarning .xuanyou_arrowCover").show(), setTimeout(function() {
            $("#xuanyou_fakeWarning").hide();
            $("#xuanyou_fakeWarning .xuanyou_arrowCover").hide()
        }, 6E3));
        return !0
    }

    function y() {
        if (2 < b.com_xuanyouwang_product.websiteId) return !0;
        var a = $("#xuanyou_recommend").offset(),
            c = $("#xuanyou_recommend").width(),
            c = c / 2;
        $("#xuanyou_recommend .xuanyou_arrowCover").css("margin-left", c + "px");
        var d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        880 <= c + a.left ? (c -= 880, 1760 <= d ? $("#xuanyou_recContent").css("width", "1760px").css("overflow-x", "hidden") : ($("#xuanyou_recContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left)) : 1760 <= d ? ($("#xuanyou_recContent").css("width", "1760px").css("overflow-x", "hidden"), c = -a.left + (d - 1760) / 2) : ($("#xuanyou_recContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left);
        $("#xuanyou_recContent").css("margin-left", c + "px");
        3 > b.com_xuanyouwang_product.websiteId && (a = $("#xuanyou_cheap").offset(), c = $("#xuanyou_cheap").width(), c /= 2, $("#xuanyou_cheap .xuanyou_arrowCover").css("margin-left", c + "px"), 880 <= c + a.left ? (c -= 880, 1760 <= d ? $("#xuanyou_cheapContent").css("width", "1760px").css("overflow-x", "hidden") : ($("#xuanyou_cheapContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left)) : 1760 <= d ? ($("#xuanyou_cheapContent").css("width", "1760px").css("overflow-x", "hidden"), c = -a.left + (d - 1760) / 2) : ($("#xuanyou_cheapContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left), $("#xuanyou_cheapContent").css("margin-left", c + "px"));
        a = $("#xuanyou_recomShop").offset();
        c = $("#xuanyou_recomShop").width();
        c /= 2;
        $("#xuanyou_recomShop .xuanyou_arrowCover").css("margin-left", c + "px");
        d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        880 <= c + a.left ? (c -= 880, 1760 <= d ? $("#xuanyou_shopContent").css("width", "1760px").css("overflow-x", "hidden") : ($("#xuanyou_shopContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left)) : 1760 <= d ? ($("#xuanyou_shopContent").css("width", "1760px").css("overflow-x", "hidden"), c = -a.left + (d - 1760) / 2) : ($("#xuanyou_shopContent").css("width", d + "px").css("overflow-x", "scroll"), c = -a.left);
        $("#xuanyou_shopContent").css("margin-left", c + "px")
    }

    function t() {
        for (var a, c, d, e = 1; 5 >= e; e++) {
            switch (e) {
                case 1:
                    c = "sincere";
                    d = "最客观评论";
                    break;
                case 2:
                    c = "soso";
                    d = "可信的中评";
                    break;
                case 3:
                    c = "bad";
                    d = "可信的差评";
                    break;
                case 4:
                    c = "normal";
                    d = "真假难辨的评论";
                    break;
                case 5:
                    c = "doubt", d = "可疑的评论"
            }
            0 >= b.com_xuanyouwang_product[c + "CommentNum"] && ($("#xuanyou_" + c + "Com").html(""), 0 >= b.com_xuanyouwang_product[c + "Comments"].length && ($("#xuanyou_" + c + "Com").append($("<p>", {
                text: "暂时没有找到" + d + "。"
            })), b.com_xuanyouwang_status.extension.preRead || $("#xuanyou_" + c + "Com").append($("<p>", {
                text: "说明：" + b.com_xuanyouwang_product.websiteName + "的预读评论功能尚未开启，如要开启请"
            }).append($("<a>", {
                href: b.com_xuanyouwang_status.extension.baseURL + "options.html#commentPreRead",
                target: "_blank",
                text: "点击这里。"
            })))));
            comments = b.com_xuanyouwang_product[c + "Comments"];
            for (var l, n, h = b.com_xuanyouwang_product[c + "CommentNum"]; h < b.com_xuanyouwang_product[c + "Comments"].length; h++) {
                b.com_xuanyouwang_product[c + "CommentNum"]++;
                n = ["html:div", {
                        "class": "xuanyou_comList"
                    },
                    ["html:div", {
                            "class": "xuanyou_comList_left"
                        },
                        ["html:div", {
                                "class": "xuanyou_firstCom"
                            },
                            ["html:div", {
                                    "class": "xuanyou_comLeft"
                                },
                                ["html:div", {
                                    "class": "xuanyou_comTitle"
                                }, "NO." + b.com_xuanyouwang_product[c + "CommentNum"] + " 初次评价:"],
                                ["html:div", {
                                        "class": "xuanyou_comDate"
                                    },
                                    comments[h].firstCmtDate.slice(0, 11)
                                ],
                                ["html:div", {
                                        "class": "xuanyou_productInfo"
                                    },
                                    comments[h].auctionSku.replace(/&nbsp;/g, "")
                                ]
                            ],
                            ["html:div", {
                                    "class": "xuanyou_comRight"
                                },
                                ["html:div", {
                                        "class": "xuanyou_comText"
                                    },
                                    comments[h].firstComment
                                ],
                                ["html:div", {
                                    "class": "xuanyou_comPics"
                                }]
                            ]
                        ]
                    ],
                    ["html:div", {
                            "class": "xuanyou_comList_right"
                        },
                        ["html:div", {
                                "class": "xuanyou_userName"
                            },
                            comments[h].nick
                        ],
                        ["html:div", {
                            "class": "xuanyou_userPhoto"
                        }]
                    ]
                ];
                l = r(n, document, {});
                if (0 < comments[h].firstPicNails.length) {
                    n = ["html:ul", {
                        "class": "xuanyou_comPicList"
                    }];
                    var k = r(n, document, {});
                    a = comments[h].firstPicNails;
                    for (var f in a) n = ["html:li", {
                            "data-src1": comments[h].firstPics[f],
                            "data-src2": c + "_" + b.com_xuanyouwang_product[c + "CommentNum"],
                            "data-src3": "1"
                        },
                        ["html:img", {
                            src: a[f],
                            alt: "晒图"
                        }],
                        ["html:b", {}]
                    ], k.appendChild(r(n, document, {}));
                    l.getElementsByClassName("xuanyou_comPics")[0].appendChild(k);
                    n = ["html:div", {
                        "class": "xuanyou_bigImageShow",
                        id: "xuanyou_bigImage_1_" + c + "_" + b.com_xuanyouwang_product[c + "CommentNum"]
                    }];
                    l.getElementsByClassName("xuanyou_comPics")[0].appendChild(r(n, document, {}))
                }
                if (0 < comments[h].appendComment.length) {
                    n = ["html:div", {
                            "class": "xuanyou_appendCom"
                        },
                        ["html:div", {
                                "class": "xuanyou_comLeft"
                            },
                            ["html:div", {
                                    "class": "xuanyou_comTitle"
                                },
                                0 < comments[h].appendDays ? "收货" + comments[h].appendDays + "天后追加：" : "当天追加："
                            ]
                        ],
                        ["html:div", {
                                "class": "xuanyou_comRight"
                            },
                            ["html:div", {
                                    "class": "xuanyou_comText"
                                },
                                comments[h].appendComment
                            ],
                            ["html:div", {
                                "class": "xuanyou_comPics"
                            }]
                        ]
                    ];
                    k = r(n, document, {});
                    if (0 < comments[h].appendPicNails.length) {
                        n = ["html:ul", {
                            "class": "xuanyou_comPicList"
                        }];
                        var q = r(n, document, {});
                        a = comments[h].appendPicNails;
                        for (f in a) n = ["html:li", {
                                "data-src1": comments[h].appendPics[f],
                                "data-src2": c + "_" + b.com_xuanyouwang_product[c + "CommentNum"],
                                "data-src3": "2"
                            },
                            ["html:img", {
                                src: a[f],
                                alt: "晒图"
                            }],
                            ["html:b", {}]
                        ], q.appendChild(r(n, document, {}));
                        k.getElementsByClassName("xuanyou_comPics")[0].appendChild(q);
                        n = ["html:div", {
                            "class": "xuanyou_bigImageShow",
                            id: "xuanyou_bigImage_2_" + c + "_" + b.com_xuanyouwang_product[c + "CommentNum"]
                        }];
                        k.getElementsByClassName("xuanyou_comPics")[0].appendChild(r(n, document, {}))
                    }
                    l.getElementsByClassName("xuanyou_comList_left")[0].appendChild(k)
                }
                5 == e && (n = ["html:div", {
                        "class": "xuanyou_comRemark"
                    },
                    ["html:div", {
                            "class": "xuanyou_comLeft"
                        },
                        ["html:div", {
                            "class": "xuanyou_comTitle"
                        }, "可疑的原因："]
                    ],
                    ["html:div", {
                            "class": "xuanyou_comRight"
                        },
                        ["html:div", {
                                "class": "xuanyou_comText"
                            },
                            comments[h].remark
                        ]
                    ]
                ], l.getElementsByClassName("xuanyou_comList_left")[0].appendChild(r(n, document, {})));
                comments[h].displayRatePic && 1 < comments[h].displayRatePic.length && (n = ["html:img", {
                    src: comments[h].displayRatePic,
                    alt: " "
                }], l.getElementsByClassName("xuanyou_userPhoto")[0].appendChild(r(n, document, {})));
                document.getElementById("xuanyou_" + c + "Com").appendChild(l)
            }
        }
        a = b.com_xuanyouwang_product.sincereCommentNum + b.com_xuanyouwang_product.sosoCommentNum + b.com_xuanyouwang_product.badCommentNum + b.com_xuanyouwang_product.normalCommentNum + b.com_xuanyouwang_product.doubtCommentNum;
        $("#xuanyou_comments .xuanyou_numHint span").text(a);
        0 < a && $("#xuanyou_comments .xuanyou_numHint").show();
        $("#xuanyou_sincereTag").text("最客观评论(" + b.com_xuanyouwang_product.sincereCommentNum + ")");
        $("#xuanyou_sosoTag").text("可信的中评(" + b.com_xuanyouwang_product.sosoCommentNum + ")");
        $("#xuanyou_badTag").text("可信的差评(" + b.com_xuanyouwang_product.badCommentNum + ")");
        $("#xuanyou_normalTag").text("真假难辨的评论(" + b.com_xuanyouwang_product.normalCommentNum + ")");
        $("#xuanyou_doubtTag").text("可疑的评论(" + b.com_xuanyouwang_product.doubtCommentNum + ")");
        $(".xuanyou_comPicList li").children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.cur), auto");
        return !0
    }

    function u() {
        $(".xuanyou_comPicList li").unbind("click");
        $(".xuanyou_bigImageShow").unbind("click");
        $(".xuanyou_comPicList li").click(function() {
            var a = $(this).attr("data-src1"),
                c = $(this).attr("data-src2"),
                d = $(this).attr("data-src3");
            0 == $(this).children("b").css("opacity") ? ($("#xuanyou_bigImage_" + d + "_" + c).html("").show(), a = ["html:img", {
                src: a,
                alt: "大图"
            }], document.getElementById("xuanyou_bigImage_" + d + "_" + c).appendChild(r(a, document, {})), $("#xuanyou_bigImage_" + d + "_" + c).children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_out.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_out.cur), auto"), $(this).css("border-color", "#f23d6a"), $(this).children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_out.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_out.cur), auto"), $(this).children("b").css("opacity", "1").css("bottom", "-12px"), $(this).siblings().css("border-color", "#f2f2f2"), $(this).siblings().children("b").css("opacity", "0").css("bottom", "-8px"), $(this).siblings().children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.cur), auto")) : ($("#xuanyou_bigImage_" + d + "_" + c).hide(), $(this).css("border-color", "#f2f2f2"), $(this).children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.cur), auto"), $(this).children("b").css("opacity", "0").css("bottom", "-8px"))
        });
        $(".xuanyou_bigImageShow").click(function() {
            $(this).hide();
            $(".xuanyou_comPicList li").css("border-color", "#f2f2f2");
            $(".xuanyou_comPicList li").children("b").css("opacity", "0").css("bottom", "-8px");
            $(".xuanyou_comPicList li").children("img").css("cursor", "url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.png), url(" + b.com_xuanyouwang_status.extension.baseURL + "images/zoom_in.cur), auto")
        })
    }

    function B(a) {
        a.sort(function(b, a) {
            var c = b.price ? parseFloat(b.price) : 0,
                d = a.price ? parseFloat(a.price) : 0;
            return c > d ? 1 : c == d ? 0 : -1
        });
        var c = 0,
            d = "";
        $(".tb-rmb-num").each(function() {
            d = $(this).text();
            reg = /[\d.]+/i;
            if (matches = reg.exec(d))
                if (c = parseFloat(matches[0]), 0 == b.com_xuanyouwang_product.price || b.com_xuanyouwang_product.price > c && 0 < c) b.com_xuanyouwang_product.price = c
        });
        var e, l = 0,
            n = document.getElementById("xuanyou_cheapContent").getElementsByClassName("xuanyou_recomProducts")[0];
        e = [];
        var h = "",
            k;
        for (k in a) {
            l++;
            e = a[k].photo;
            var f = "";
            a[k].price < b.com_xuanyouwang_product.price ? (h = (b.com_xuanyouwang_product.price - a[k].price) / b.com_xuanyouwang_product.price * 100, h = h.toFixed(), f = "比当前商品便宜" + h + "%") : a[k].price == b.com_xuanyouwang_product.price ? f = "和当前商品的价格相同" : a[k].price > b.com_xuanyouwang_product.price && (f = "比当前商品贵" + (a[k].price - b.com_xuanyouwang_product.price).toFixed(2) + "元");
            h = 0 < b.com_xuanyouwang_config.settings.debug ? b.com_xuanyouwang_config.settings.baseUrl + "autoTransfer.php?website=2&id=" + a[k].itemId + "&browser=" + b.com_xuanyouwang_config.settings.browser : "https://detail.tmall.com/item.htm?id=" + a[k].itemId;
            e = ["html:li", {},
                ["html:a", {
                        href: h,
                        target: "_blank"
                    },
                    ["html:img", {
                        src: e,
                        alt: a[k].name
                    }],
                    ["html:p", {
                            title: a[k].name
                        },
                        a[k].name
                    ]
                ],
                ["html:div", {
                        "class": "xuanyou_productPrice"
                    },
                    ["html:b", {}, "￥"], a[k].price
                ],
                ["html:p", {},
                    f
                ]
            ];
            n.appendChild(r(e, document, {}))
        }
        if (l) $("#xuanyou_cheapContent").css("width", "1760px").css("height", "240px").css("margin-left", "-775px"), $("#xuanyou_cheapContent .xuanyou_tips").remove(), $("#xuanyou_cheap .xuanyou_numHint span").text(l), a = $("#xuanyou_cheap").width(), $("#xuanyou_cheap .xuanyou_numHint").css("left", a - 5 + "px"), $("#xuanyou_cheap .xuanyou_numHint").show();
        else return $("#xuanyou_cheapContent").css("width", "200px").css("height", "70px").css("margin-left", "-30px").text("暂时没有找到相似推荐。"), !0;
        y();
        return !0
    }

    function F() {
        var a = window.location.host;
        if (0 <= a.indexOf("taobao.com")) b.com_xuanyouwang_product.websiteId = 1, b.com_xuanyouwang_product.websiteName = "淘宝", G();
        else if (0 <= a.indexOf("tmall.com") || 0 <= a.indexOf("tmall.hk") || 0 <= a.indexOf("yao.95095.com") || 0 <= a.indexOf("liangxinyao.com")) b.com_xuanyouwang_product.websiteId = 2, b.com_xuanyouwang_product.websiteName = "天猫", H();
        else if (0 <= a.indexOf("jd.com")) b.com_xuanyouwang_product.websiteId = 3, b.com_xuanyouwang_product.websiteName = "京东", I();
        else if (0 <= a.indexOf("yhd.com")) {
            if (b.com_xuanyouwang_product.websiteId = 4, b.com_xuanyouwang_product.websiteName = "1号店", b.com_xuanyouwang_product.name = $("h1").text(), a = /(\d+).html/i.exec(window.location.href)) b.com_xuanyouwang_product.itemId = a[1]
        } else if (0 <= a.indexOf("dangdang.com")) b.com_xuanyouwang_product.websiteId = 5, b.com_xuanyouwang_product.websiteName = "当当", J();
        else if (0 <= a.indexOf("amazon.cn")) {
            b.com_xuanyouwang_product.websiteId = 6;
            b.com_xuanyouwang_product.websiteName = "亚马逊";
            a = $("#productTitle").text();
            b.com_xuanyouwang_product.name = $.trim(a) + "_亚马逊";
            var c = window.location.href,
                a = /\/(product|dp|d)\/(\w+)/i;
            if (a = a.exec(c)) b.com_xuanyouwang_product.itemId = a[2];
            (c = $("#priceblock_ourprice").text()) || (c = $("#priceblock_saleprice").text());
            c || (c = $(".price").text());
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.com_xuanyouwang_product.price = parseFloat(a[0])
        } else if (0 <= a.indexOf("gome.com")) {
            b.com_xuanyouwang_product.websiteId = 7;
            b.com_xuanyouwang_product.websiteName = "国美在线";
            b.com_xuanyouwang_product.name = $("h1").text();
            c = window.location.href;
            a = /[\/-](\w+)-(\w+).html/;
            if (a = a.exec(c)) b.com_xuanyouwang_product.itemId = a[1], b.com_xuanyouwang_product.productId = a[2];
            c = $("#prdPrice").text();
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.com_xuanyouwang_product.price = parseFloat(a[0])
        } else if (0 <= a.indexOf("suning")) {
            b.com_xuanyouwang_product.websiteId = 8;
            b.com_xuanyouwang_product.websiteName = "苏宁易购";
            var a = $("h1").html(),
                c = $("#itemDisplayName").html(),
                d = a;
            c && c.length > a.length && (d = c);
            0 <= d.indexOf("<span") && (d = d.replace(/<span[\s\S]*<\/span>/g, ""));
            b.com_xuanyouwang_product.name = $.trim(d);
            c = window.location.href;
            a = /(\d+)\/(\d+)[^.\/]*?\.html/;
            if (a = a.exec(c)) b.com_xuanyouwang_product.sourceId = a[1], b.com_xuanyouwang_product.itemId = a[2];
            (c = $("#promotionPrice").text()) || (c = $("#promoPrice").text());
            c || (c = $(".mainprice").text());
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.com_xuanyouwang_product.price = parseFloat(a[0])
        }
        return !0
    }

    function G() {
        var a = /([\s\S]*?)-(tmall|\u6dd8\u5b9d|\u5929\u732b)[\s\S]*?/i,
            c = document.title.match(a);
        c && (b.com_xuanyouwang_product.name = c[1]);
        var d = $("meta[name='microscope-data']").attr("content"),
            a = /userid=(\d+)/i;
        d && (c = d.match(a));
        c && (b.com_xuanyouwang_product.sellerId = c[1]);
        d = window.location.href;
        a = /id=(\d+)/i;
        if (c = d.match(a)) b.com_xuanyouwang_product.itemId = c[1];
        var e = 0,
            l = "";
        $(".tb-rmb-num").each(function() {
            l = $(this).text();
            a = /[\d.]+/i;
            if (c = a.exec(l))
                if (e = parseFloat(c[0]), 0 == b.com_xuanyouwang_product.price || b.com_xuanyouwang_product.price > e && 0 < e) b.com_xuanyouwang_product.price = e
        });
        return !0
    }

    function H() {
        var a = /([\s\S]*?)-(tmall|\u6dd8\u5b9d|\u5929\u732b)[\s\S]*?/i;
        if (a = document.title.match(a)) b.com_xuanyouwang_product.name = a[1];
        var c = $("meta[name='microscope-data']").attr("content");
        void 0 !== c ? (a = /userid=(\d+)/i, a = c.match(a)) : (c = $("#J_SellerInfo").attr("data-url"), a = /user_num_id=(\d+)/i, a = a.exec(c));
        a && (b.com_xuanyouwang_product.sellerId = a[1]);
        c = window.location.href;
        a = /id=(\d+)/i;
        if (a = c.match(a)) b.com_xuanyouwang_product.itemId = a[1];
        var d = 0;
        $(".tm-price").each(function() {
            d = parseFloat($(this).text());
            if (0 == b.com_xuanyouwang_product.price || b.com_xuanyouwang_product.price > d && 0 < d) b.com_xuanyouwang_product.price = d
        });
        return !0
    }

    function I() {
        b.com_xuanyouwang_product.name = $(".sku-name").html();
        if (!b.com_xuanyouwang_product.name || 1 > b.com_xuanyouwang_product.name.length) b.com_xuanyouwang_product.name = $("h1").text();
        var a = /\/(\d+).html/i;
        if (a = a.exec(window.location.href)) b.com_xuanyouwang_product.itemId = a[1];
        var c = $("#jd-price").text(),
            a = /[\d.]+/i;
        if (a = a.exec(c)) b.com_xuanyouwang_product.price = parseFloat(a[0]);
        if (0 >= b.com_xuanyouwang_product.price || isNaN(b.com_xuanyouwang_product.price)) b.com_xuanyouwang_product.price = parseFloat($(".summary-price-wrap .price").text());
        (0 >= b.com_xuanyouwang_product.price || isNaN(b.com_xuanyouwang_product.price)) && $(".p-price").each(function() {
            price = parseFloat($(this).text());
            if (0 == b.com_xuanyouwang_product.price || b.com_xuanyouwang_product.price > price && 0 < price) b.com_xuanyouwang_product.price = price
        });
        return !0
    }

    function J() {
        var a, c = $("h1").html();
        void 0 === c && (c = "");
        0 <= c.indexOf("<span") ? b.com_xuanyouwang_product.name = c.replace(/<span.*?<\/span>/g, "") : 0 <= c.indexOf("<img") ? b.com_xuanyouwang_product.name = c.replace(/<img[\s\S]*?">/g, "") : b.com_xuanyouwang_product.name = c;
        c = window.location.href;
        a = /\/(\d+).html/i;
        var d = a.exec(c);
        d && (b.com_xuanyouwang_product.itemId = d[1]);
        var e = $("#salePriceTag").text();
        e || (e = $("#promo_price").text());
        e || (e = $("#d_price").text());
        a = /[\d.]+/i;
        if (d = a.exec(e)) b.com_xuanyouwang_product.price = parseFloat(d[0]);
        b.com_xuanyouwang_product.price || $(".price_d").each(function() {
            e = $(this).text();
            if (d = a.exec(e))
                if (price = parseFloat(d[0]), 0 == b.com_xuanyouwang_product.price || b.com_xuanyouwang_product.price > price && 0 < price) b.com_xuanyouwang_product.price = price
        });
        return !0
    }

    function C(a) {
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        var c = {}, d, e, l, n, h, k, f, q, m, g, w, r;
        if (0 >= a.length) return 0;
        if (d = /\(({[\s\S]*})\)/i.exec(a)) newData = d[1];
        else return a.indexOf('"url"'), 0;
        try {
            c = JSON.parse(newData)
        } catch (t) {
            return 0
        }
        a = [];
        if (c.comments && 0 < c.comments.length) {
            a = c.comments;
            for (var p in a) {
                c = a[p].user.nick ? a[p].user.nick : "";
                d = a[p].user.displayRatePic ? "//assets.alicdn.com/sys/common/icon/rank_s/" + a[p].user.displayRatePic : "";
                e = a[p].auction.sku ? a[p].auction.sku : "";
                l = a[p].content ? a[p].content : "";
                n = a[p].appendList[0] && a[p].appendList[0].content ? a[p].appendList[0].content : "";
                h = a[p].reply && a[p].reply.content ? a[p].reply.content : "";
                k = a[p].date ? a[p].date : "";
                f = a[p].appendList[0] && a[p].appendList[0].dayAfterConfirm ? a[p].appendList[0].dayAfterConfirm : 0;
                q = [];
                m = [];
                if (a[p].photos && 0 < a[p].photos.length)
                    for (var u in a[p].photos) q[u] = a[p].photos[u].thumbnail, m[u] = a[p].photos[u].url;
                g = [];
                w = [];
                if (a[p].append && a[p].append.photos && 0 < a[p].append.photos.length) {
                    r = a[p].append.photos;
                    for (var x in r) g[x] = r[x].thumbnail, w[x] = r[x].url
                }
                b.com_xuanyouwang_product.defaultComments.push({
                    nick: c,
                    displayRatePic: d,
                    auctionSku: e,
                    firstComment: l,
                    appendComment: n,
                    reply: h,
                    firstCmtDate: k,
                    appendDays: f,
                    firstPicNails: q,
                    firstPics: m,
                    appendPicNails: g,
                    appendPics: w
                })
            }
        }
        return a.length
    }

    function K(a) {
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        var c = {}, d, e, l, n, h, k, f, q, m, g, r, t;
        if (0 >= a.length) return 0;
        try {
            c = JSON.parse("{" + a + "}")
        } catch (u) {
            return 0
        }
        a = [];
        if (c.rateDetail.rateList) {
            a = c.rateDetail.rateList;
            for (var p in a) {
                c = a[p].displayUserNick ? a[p].displayUserNick : "";
                d = a[p].tamllSweetLevel ? a[p].tamllSweetLevel : 0;
                e = a[p].auctionSku ? a[p].auctionSku : "";
                l = a[p].rateContent ? a[p].rateContent : "";
                n = a[p].appendComment.content ? a[p].appendComment.content : "";
                h = a[p].reply ? a[p].reply : "";
                k = a[p].rateDate ? a[p].rateDate : "";
                f = a[p].appendComment.days ? a[p].appendComment.days : 0;
                q = [];
                m = [];
                if (0 < a[p].pics.length)
                    for (var v in a[p].pics) q[v] = a[p].pics[v] + "_40x40.jpg", m[v] = a[p].pics[v] + "_400x400.jpg";
                g = [];
                r = [];
                if (void 0 !== a[p].appendComment.pics && 0 < a[p].appendComment.pics.length) {
                    t = a[p].appendComment.pics;
                    for (var x in t) g[x] = t[x] + "_40x40.jpg", r[x] = t[x] + "_400x400.jpg"
                }
                b.com_xuanyouwang_product.defaultComments.push({
                    nick: c,
                    tamllSweetLevel: d,
                    displayRatePic: d ? "//g.alicdn.com/tm/member-club/4.6.0/img/tmall-grade-t" + d + "-18.png" : "",
                    auctionSku: e,
                    firstComment: l,
                    appendComment: n,
                    reply: h,
                    firstCmtDate: k,
                    appendDays: f,
                    firstPicNails: q,
                    firstPics: m,
                    appendPicNails: g,
                    appendPics: r
                })
            }
        }
        return a.length
    }

    function L(a) {
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        var c = {}, d, e, l, n, h, k, f, q;
        if (0 >= a.length) return 0;
        try {
            c = JSON.parse(a)
        } catch (r) {
            return 0
        }
        a = [];
        if (c.comments) {
            a = c.comments;
            for (var m in a) {
                c = a[m].nickname ? a[m].nickname : "";
                d = a[m].userImageUrl ? "//" + a[m].userImageUrl : "";
                e = a[m].productColor ? a[m].productColor + " " + (a[m].productSize ? a[m].productSize : "") : "";
                l = a[m].content ? a[m].content : "";
                n = a[m].creationTime ? a[m].creationTime : "";
                h = [];
                k = [];
                if (a[m].images && 0 < a[m].images.length)
                    for (var g in a[m].images) h[g] = a[m].images[g].imgUrl, k[g] = h[g].replace(/128x96/, "340x400");
                f = [];
                q = [];
                b.com_xuanyouwang_product.defaultComments.push({
                    nick: c,
                    displayRatePic: d,
                    auctionSku: e,
                    firstComment: l,
                    appendComment: "",
                    reply: "",
                    firstCmtDate: n,
                    appendDays: 0,
                    firstPicNails: h,
                    firstPics: k,
                    appendPicNails: f,
                    appendPics: q
                })
            }
        }
        return a.length
    }

    function M(a) {
        var c, d, e, l, n, h, k;
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        n = {};
        if (0 >= a.length) return 0;
        try {
            n = JSON.parse(a)
        } catch (r) {
            return 0
        }
        for (var f = n.value.replace(/>\s+</g, "><"), q = /<div class=\\"item good-comment\\"[\s\S]*?class=\\"user_info\\"[\s\S]*?class=\\"replyBtn_con[\s\S]*?<\/ul>[\s\S]*?<\/div>/ig, m, g, t = 0; null !== (c = q.exec(f));) {
            t++;
            a = [];
            n = [];
            h = [];
            k = [];
            e = c[0];
            m = /userName=\\"([^\"]*?)\\"/i;
            c = (contents = m.exec(e)) ? contents[1] : "";
            m = /<i class=\\"vip_icon ([^\"]+)\\">/;
            d = (contents = m.exec(e)) ? b.com_xuanyouwang_status.extension.baseURL + "images/yhd_" + contents[1] + ".gif" : "";
            m = /<span class=\\"star s(\d)\\">/;
            contents = m.exec(e);
            m = /<span class=\\"date\\">.*?([\d\s:-]+)<\/span>/;
            l = (contents = m.exec(e)) ? contents[1] : "";
            for (m = /data-tpc=\\"SHINE\\"[\s\S]*?src=\\"([^\"]*)\\"/ig; null !== (contents = m.exec(e));) n.push(contents[1]), g = contents[1].replace(/_40x40/, "_400x300"), a.push(g);
            m = /<span class=\\"text\\">([\s\S]*?)<div/i;
            e = (contents = m.exec(e)) ? contents[1].replace(/(<[^>]+>)|(\\[rtn])|(\s+)/g, "") : "";
            b.com_xuanyouwang_product.defaultComments.push({
                nick: c,
                displayRatePic: d,
                auctionSku: "",
                firstComment: e,
                appendComment: "",
                reply: "",
                firstCmtDate: l,
                appendDays: 0,
                firstPicNails: n,
                firstPics: a,
                appendPicNails: k,
                appendPics: h
            })
        }
        return t
    }

    function N(a) {
        var c, d, e, l, n, h, k, f;
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        c = {};
        if (0 >= a.length) return 0;
        try {
            c = JSON.parse(a)
        } catch (r) {
            return 0
        }
        for (var q = c.data.html.replace(/>\s+</g, "><"), m = /<div class=\"describe_detail\"><span>(.*?)<\/span><\/div>(<ul class=\"pic_show.*?<\/ul>)?.*?<div class=\"starline clearfix\">(.*?)<\/div>.*?<span class=\"name\".*?>(.*?)<\/span><span class=\"level level(\d*)\">/ig, g, t = 0; null !== (g = m.exec(q));) {
            t++;
            l = d = "";
            n = [];
            h = [];
            k = [];
            f = [];
            c = g[5] ? b.com_xuanyouwang_status.extension.baseURL + "images/dangdang_v" + parseInt(g[5]) + ".gif" : b.com_xuanyouwang_status.extension.baseURL + "images/dangdang_v0.gif";
            a = g[4];
            e = g[1].replace(/<[^>]+>/g, "");
            var u = g[3].replace(/<[^>]+>/g, ""),
                p = /\d+-\d+-\d+ \d+:\d+:\d+/.exec(u);
            p && (l = p[0], d = u.replace(l, ""), d = d.replace("已购", ""));
            if (g[2])
                for (regImg = /src="([^"]+)".*?big="([^"]+)"/g, num = 0; null !== (images = regImg.exec(g[2]));) h[num] = images[1], n[num] = images[2], num++;
            b.com_xuanyouwang_product.defaultComments.push({
                nick: a,
                displayRatePic: c,
                auctionSku: d,
                firstComment: e,
                appendComment: "",
                reply: "",
                firstCmtDate: l,
                appendDays: 0,
                firstPicNails: h,
                firstPics: n,
                appendPicNails: f,
                appendPics: k
            })
        }
        return t
    }

    function O(a) {
        var c, d, e, l, n, h, k, f, q;
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        c = {};
        if (0 >= a.length || !(a = /\(({[\s\S]*})\)/i.exec(a))) return 0;
        a = a[1];
        try {
            c = JSON.parse(a)
        } catch (r) {
            return 0
        }
        a = [];
        if (c.evaList.Evalist) {
            a = c.evaList.Evalist;
            for (var m in a) {
                f = [];
                q = [];
                c = a[m].loginname ? a[m].loginname : "";
                d = a[m].imagePath ? a[m].imagePath : "";
                l = a[m].appraiseElSum ? a[m].appraiseElSum : "";
                n = a[m].post_time ? a[m].post_time : "";
                k = [];
                h = [];
                e = a[m].skuInfo ? a[m].skuInfo : "";
                if (a[m].pic && 0 < a[m].pic.length)
                    for (var g in a[m].pic) k[g] = a[m].pic[g], h[g] = a[m].pic[g];
                b.com_xuanyouwang_product.defaultComments.push({
                    nick: c,
                    displayRatePic: d,
                    auctionSku: e,
                    firstComment: l,
                    appendComment: "",
                    reply: "",
                    firstCmtDate: n,
                    appendDays: 0,
                    firstPicNails: k,
                    firstPics: h,
                    appendPicNails: q,
                    appendPics: f
                })
            }
        }
        return a.length
    }

    function P(a) {
        var c, d, e, l, n, h, k;
        b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
        c = {};
        if (0 >= a.length || !(a = /\(({[\s\S]*})\)/i.exec(a))) return 0;
        a = a[1];
        try {
            c = JSON.parse(a)
        } catch (m) {
            return 0
        }
        a = [];
        if (c.commodityReviews) {
            a = c.commodityReviews;
            for (var f in a) {
                h = [];
                k = [];
                c = a[f].userInfo.nickName ? a[f].userInfo.nickName : "";
                d = a[f].content ? a[f].content : "";
                e = a[f].publishTime ? a[f].publishTime : "";
                n = [];
                l = [];
                if (a[f].picVideInfo && a[f].picVideInfo.imageInfo && 0 < a[f].picVideInfo.imageInfo.length)
                    for (var q in a[f].picVideInfo.imageInfo) n[q] = a[f].picVideInfo.imageInfo[q].url + "_100x100.jpg", l[q] = a[f].picVideInfo.imageInfo[q].url + "_400x400.jpg";
                b.com_xuanyouwang_product.defaultComments.push({
                    nick: c,
                    displayRatePic: "",
                    auctionSku: "",
                    firstComment: d,
                    appendComment: "",
                    reply: "",
                    firstCmtDate: e,
                    appendDays: 0,
                    firstPicNails: n,
                    firstPics: l,
                    appendPicNails: k,
                    appendPics: h
                })
            }
        }
        return a.length
    }

    function Q() {
        if (!b.com_xuanyouwang_config.settings.commentWords || void 0 === b.com_xuanyouwang_config.settings.commentWords.neg) return !0;
        switch (b.com_xuanyouwang_product.websiteId) {
            case 1:
                b.com_xuanyouwang_modules.getCommentData_taobao(1);
                break;
            case 2:
                b.com_xuanyouwang_modules.getCommentData_tmall(1);
                break;
            case 3:
                b.com_xuanyouwang_modules.getCommentData_jd(1);
                break;
            case 4:
                b.com_xuanyouwang_modules.getCommentData_yhd(1);
                break;
            case 5:
                b.com_xuanyouwang_modules.getCommentData_dangdang(1);
                break;
            case 6:
                b.com_xuanyouwang_modules.getCommentData_amazon(1);
                break;
            case 7:
                b.com_xuanyouwang_modules.getCommentData_guomei(1);
                break;
            case 8:
                b.com_xuanyouwang_modules.getCommentData_suning(1);
                break;
            default:
                return !1
        }
        return !0
    }

    function z(a, c) {
        var d = "",
            d = "",
            d = 1 == a && 1 < c.length ? "samestyle" : "similar",
            d = 3 > b.com_xuanyouwang_product.websiteId ? "https://s.taobao.com/search?type=" + d + "&app=i2i&rec_type=1&nid=" + b.com_xuanyouwang_product.itemId + "&uniqpid=" + c + "&sort=price-asc" : "http://s.etao.com/search?q=" + encodeURI(b.com_xuanyouwang_product.name);
        b.thisExplorer.runtime.sendMessage({
            getSameProducts: d
        }, function(c) {
            var d;
            if (3 > b.com_xuanyouwang_product.websiteId) a: {
                var n = {
                    pid: 0,
                    productsArray: []
                };
                if (c = / g_page_config = ({[\s\S]*?})\;/i.exec(c.sameProductsData)) {
                    c = c[1];
                    try {
                        d = JSON.parse(c)
                    } catch (f) {
                        d = n;
                        break a
                    }
                    var h = 0;
                    c = d.mods.recitem.data.items;
                    n.pid = d.mods.singleauction.data.pid;
                    for (var k in c)
                        if (n.productsArray[h] = {
                            name: c[k].title,
                            price: c[k].view_price,
                            photo: c[k].pic_url + "_220x220.jpg",
                            websiteId: 0 <= c[k].detail_url.indexOf("tmall") ? 2 : 1,
                            itemId: c[k].nid,
                            productId: c[k].pid
                        }, h++, 10 <= h) break
                }
                d = n
            } else d = !1;
            sameProductsData = d;
            if (2 == a) {
                if (b.com_xuanyouwang_product.similarProducts = sameProductsData.productsArray, 1 < sameProductsData.pid.length) return z(1, sameProductsData.pid), !0
            } else if (1 == a && 1 < sameProductsData.productsArray.length) return $("#xuanyou_saorsim").text("同款商品"), B(sameProductsData.productsArray), !0;
            0 < b.com_xuanyouwang_product.similarProducts.length && ($("#xuanyou_saorsim").text("相似推荐"), B(b.com_xuanyouwang_product.similarProducts))
        });
        return !0
    }

    function R() {
        var a = b.com_xuanyouwang_modules.getSearchClass(b.com_xuanyouwang_product.name);
        b.com_xuanyouwang_product.classId = a.classId;
        b.com_xuanyouwang_modules.isGetCmtPermit();
        switch (b.com_xuanyouwang_product.websiteId) {
            case 1:
                S();
                break;
            case 2:
                T();
                break;
            case 3:
                U();
                break;
            case 4:
                V();
                break;
            case 5:
                W();
                break;
            case 7:
                X();
                break;
            case 8:
                Y()
        }
        if (b.com_xuanyouwang_status.extension.preRead) Q();
        else if (0 == b.com_xuanyouwang_product.sincereComments.length + b.com_xuanyouwang_product.sosoComments.length + b.com_xuanyouwang_product.badComments.length + b.com_xuanyouwang_product.normalComments.length + b.com_xuanyouwang_product.doubtComments.length)
            for (var c = 1; 5 >= c; c++) {
                switch (c) {
                    case 1:
                        areaName = "sincere";
                        commentName = "最客观评论";
                        break;
                    case 2:
                        areaName = "soso";
                        commentName = "可信的中评";
                        break;
                    case 3:
                        areaName = "bad";
                        commentName = "可信的差评";
                        break;
                    case 4:
                        areaName = "normal";
                        commentName = "真假难辨的评论";
                        break;
                    case 5:
                        areaName = "doubt", commentName = "可疑的评论"
                }
                $("#xuanyou_" + areaName + "Com").html("");
                $("#xuanyou_" + areaName + "Com").append($("<p>", {
                    text: "暂时没有找到" + commentName + "。"
                })).append($("<p>", {
                    text: "说明：" + b.com_xuanyouwang_product.websiteName + "的预读评论功能尚未开启，如需开启请"
                }).append($("<a>", {
                    href: b.com_xuanyouwang_status.extension.baseURL + "options.html#commentPreRead",
                    target: "_blank",
                    text: "点击这里。"
                })))
            }
        if (2 < b.com_xuanyouwang_product.websiteId) return b.thisExplorer.runtime.sendMessage({
            checkFakeReviews: b.com_xuanyouwang_config.settings.fakeCheckUrl,
            source: b.com_xuanyouwang_product.websiteId,
            itemId: b.com_xuanyouwang_product.itemId,
            productId: b.com_xuanyouwang_product.productId
        }, function(b) {
            0 >= b.result.length || (b = JSON.parse(b.result), 0 < b.fake && A(b))
        }), !0;
        var c = parseInt(com_xuanyouwang_modules.getPreferOrder(a.classId)),
            d = "";
        switch (c) {
            case 1:
                d = 0;
                243 == a.classId ? d = 1 : 242 == a.classId && /(\u8f85\u98df|\u8425\u517b|\u8c03\u5473|\u5976\u7c89|\u6eb6\u8c46|\u8089\u80a0|\u5976\u7247|\u76ca\u751f\u83cc|\u9499\u94c1\u950c|DHA|\u725b\u521d\u4e73)/g.test(a.word) && (d = 1);
                d = d ? "（最好吃）" : "（最好看）";
                break;
            case 2:
                d = "（性价比最高）";
                break;
            case 3:
                d = "（服务最好）";
                break;
            case 4:
                d = "（质量最好）";
                break;
            case 5:
                d = "（总体最好）";
                break;
            default:
                d = ""
        }
        $("#xuanyou_optDes").text(d);
        d = "";
        switch (b.com_xuanyouwang_config.options.goldShopType) {
            case "1":
                d = "金牌卖家";
                break;
            case "2":
                d = "放心店铺";
                break;
            case "3":
                d = "特色网店";
                break;
            default:
                d = "放心店铺"
        }
        $("#xuanyou_shopType").text(d);
        d = "";
        switch (b.com_xuanyouwang_config.options.goldShopSort) {
            case "1":
                d = "（最相关）";
                break;
            case "2":
                d = "（评分最高）";
                break;
            case "3":
                d = "（好评最多）";
                break;
            case "4":
                d = "（信用最高）";
                break;
            case "5":
                d = "（销量最高）";
                break;
            case "6":
                d = "（描述相符）";
                break;
            case "7":
                d = "（服务态度）";
                break;
            case "8":
                d = "（物流服务）";
                break;
            default:
                d = "（评分最高）"
        }
        $("#xuanyou_shopSort").text(d);
        0 < c && $(".xuanyou_searchDes option").eq(c + 2).attr("selected", "selected");
        b.com_xuanyouwang_modules.getRecommendExecute(a.word, c)
    }

    function v(b) {
        var c = {
            resultType: "",
            resultRemark: ""
        }, d = b.remark;
        switch (b.result) {
            case 0:
                c.resultType = "xuanyou_youyoudoubt";
                c.resultRemark = "不知道是真是假，还是多个心眼吧。";
                break;
            case 1:
                c.resultType = "xuanyou_youyoudoubt";
                c.resultRemark = 0 < d.length ? d : "是真是假不好判断呀。";
                break;
            case 4:
                c.resultType = "xuanyou_youyoudoubt";
                c.resultRemark = 0 < d.length ? d : "没什么参考价值，不看也罢。";
                break;
            case 6:
                c.resultType = "xuanyou_youyouagree";
                c.resultRemark = 0 < d.length ? "这应该是真的。" + d : "差评通常都是真的，不过有时可能是差评师或卖家同行所为。";
                break;
            case 7:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "有点问题。" + d : "我有点怀疑这是不是真的，因为这个账号重复购买了好几次。";
                break;
            case 8:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "我不信！" + d : "我不信，发现有人抄袭了。";
                break;
            case 9:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? d : "看起来有点假啊。";
                break;
            case 10:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "？？？" + d : "老板，有人在你这里打广告！";
                break;
            case 11:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "我才不信呢！" + d : "我才不信呢！追评也不认真点。";
                break;
            case 12:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "这有点问题吧？" + d : "不信，这追评也太心急了，就像完成任务似的。";
                break;
            case 13:
                c.resultType = "xuanyou_youyoudisagree";
                c.resultRemark = 0 < d.length ? "值得怀疑。" + d : "不太相信，这也写得太用心了吧。";
                break;
            case 21:
                c.resultType = "xuanyou_youyouagree";
                c.resultRemark = 0 < d.length ? "这应该是真的！" + d : "这个应该是真的，比较客观！但是如果指出的问题和商品无关，也可能是假的。";
                break;
            case 22:
                c.resultType = "xuanyou_youyouagree";
                c.resultRemark = 0 < d.length ? "是真的！" + d : "这个应该是真的！与商品和商家有关的问题需要关注。如果指出的问题与商品和商家无关，其中也可能有诈。";
                break;
            case 23:
                c.resultType = "xuanyou_youyoudoubt", c.resultRemark = 0 < d.length ? "真假不好说。" + d : "是真是假不好判断，可以参考，但最好保持警惕，特别是在有刷单报警的情况下。"
        }
        return c
    }

    function S() {
        var a = 0;
        (new Date).getFullYear();
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var b = $(".J_KgRate_Main").html();
            if (b && 0 <= b.indexOf("J_KgRate_ReviewItem") && 0 > b.indexOf("xuanyou-tm-comment")) return c(), a || ($(".kg-rate-wd-filter-bar").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), a = 1), $(".kg-pagination2 li").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".tb-r-ubox a").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 500)
        };
        var c = function() {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            $("li.J_KgRate_ReviewItem").each(function() {
                content = $(this).html();
                content = content.replace(/>\s+</g, "><");
                var a = d(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.auctionSku + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            e();
            t();
            u()
        }, d = function(b) {
                var a, c, d;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                a = /class="avatar".*?<div>(.*?)<\/div>(<img.*?src="([^"]+)">)?.*?class="J_KgRate_ReviewContent.*?>([\s\S]*?)<div class=\"tb-rev-item-media\">(<ul class="kg-photo-viewer-thumb-bar.*?<\/ul>)?.*?class="tb-r-date">(.*?)<\/span>([\s\S]*?)<\/div>[\s\S]*?<\/div><\/div>(<div class="tb-rev-item tb-rev-item-append".*?\[\u8ffd\u52a0\u8bc4\u8bba\]<\/span>([\s\S]*?)<\/div>(<ul class="kg-photo-viewer-thumb-bar.*?<\/ul>)?.*?class="tb-r-date">(.*?)<\/span>)?/i;
                if (b = a.exec(b)) {
                    c.nick = b[1].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    c.displayRatePic = b[3];
                    c.firstComment = b[4].replace(/<[^>]+>/g, "").trim();
                    if (b[5])
                        for (d = /src="([^"]+)"/g, a = 0; null !== (images = d.exec(b[5]));) c.firstPicNails[a] = images[1], c.firstPics[a] = images[1].replace(/40x40/, "400x400"), a++;
                    c.firstCmtDate = b[6];
                    c.auctionSku = b[7].replace(/<[^>]+>/g, "").trim();
                    if (b[8]) {
                        c.appendComment = b[9].trim();
                        if (b[10])
                            for (d = /src="([^"]+)"/g, a = 0; null !== (images = d.exec(b[10]));) c.appendPicNails[a] = images[1], c.appendPics[a] = images[1].replace(/40x40/, "400x400"), a++;
                        a = /\d+/;
                        if (b = a.exec(b[11])) c.appendDays = b[0]
                    }
                }
                return c
            }, e = function() {
                var a, c, e = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    k = $(".J_KgRate_Filter li.is-current").attr("data-kg-rate-filter-val");
                $(".tb-revbd li.J_KgRate_ReviewItem").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var f = d(content);
                    0 < f.nick.length && (indexKey = f.firstCmtDate + f.nick + f.auctionSku + f.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (0 == k ? (a = "xuanyou_youyouagree", c = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : -1 == k ? (a = "xuanyou_youyouagree", c = "差评通常都是真的，不过有时候可能是差评师或卖家同行写的。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (f = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = f.resultType, c = f.resultRemark), $(this).find(".review-details").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + c
                    }))), $(".xuanyou_img").css("background-image", "url(" + e + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $("#J_TabBar li").click(function() {
            b.com_xuanyouwang_modules.findCommentArea()
        });
        $("#reviews").delegate("li", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function T() {
        var a = 0,
            c = (new Date).getFullYear();
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var b = $(".rate-grid").html();
            if (b && 0 <= b.indexOf("tm-col-master") && 0 <= b.indexOf("<tr>") && 0 > b.indexOf("xuanyou-tm-comment")) return d(), a || ($(".rate-toolbar").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), a = 1), $(".rate-paginator a").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".rate-tag-inner a").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".rate-tag-toggle").click(function() {
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 500)
        };
        var d = function() {
            $(".rate-grid tr").each(function() {
                content = $(this).html();
                var a = e(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate.slice(0, 10) + a.nick + a.auctionSku + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            l();
            t();
            u()
        }, e = function(b) {
                var a, d, e;
                e = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                a = /\u521d\u6b21\u8bc4\u4ef7:.*?"tm-rate-date">(\u4eca\u5929|((\d{4}).)?(\d+).(\d+))<\/div>.*?class="tm-rate-fulltxt">(.*?)<\/div>(<div class="tm-m-photos"><ul class="tm-m-photos-thumb">.*?<\/ul>)?.*?<div class="tm-rate-append">.*?class="tm-rate-daydiff">(.*?)<\/span>.*?class="tm-rate-fulltxt">(.*?)<\/div>(<div class="tm-m-photos"><ul class="tm-m-photos-thumb">.*?<\/ul>)?.*?class="rate-sku"><p title="(.*?)">.*?class="rate-user-info">(.*?)<\/div>(<div class="rate-user-grade">.*?src="([^"]+)")?/i;
                if (d = a.exec(b)) {
                    "今天" == d[1] ? e.firstCmtDate = (new Date).format("yyyy-MM-dd") : (b = d[4], a = d[5], e.firstCmtDate = d[3] ? d[3] + "-" + b + "-" + a : c + "-" + b + "-" + a);
                    e.firstComment = d[6].replace(/<[^>]+>/g, "");
                    b = /data-src="([^"]+)".*?src="([^"]+)"/g;
                    for (a = 0; null !== (images = b.exec(d[7]));) e.firstPicNails[a] = images[2], e.firstPics[a] = images[1], a++;
                    if (0 <= d[8].indexOf("收货当天追加：")) e.appendDays = 0;
                    else if (a = /\d+/, a = a.exec(d[8])) e.appendDays = a[0];
                    e.appendComment = d[9].replace(/<[^>]+>/g, "");
                    for (a = 0; null !== (images = b.exec(d[10]));) e.appendPicNails[a] = images[2], e.appendPics[a] = images[1], a++;
                    e.auctionSku = d[11];
                    e.nick = d[12].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    e.displayRatePic = d[14]
                } else if (a = /class="tm-rate-fulltxt">(.*?)<\/div>(<div class="tm-m-photos"><ul class="tm-m-photos-thumb">[\s\S]*?<\/ul>)?.*?class="tm-rate-date">((\d{4}).)?((\d+).(\d+)|\u4eca\u5929)<\/div>.*?class="rate-sku"><p title="(.*?)">.*?class="rate-user-info">(.*?)<\/div>(<div class="rate-user-grade">[\s\S]*?src="([^"]+)")?/i, d = a.exec(b)) {
                    e.firstComment = d[1].replace(/<[^>]+>/g, "");
                    b = /data-src="([^"]+)".*?src="([^"]+)"/g;
                    for (a = 0; null !== (images = b.exec(d[2]));) e.firstPicNails[a] = images[2], e.firstPics[a] = images[1], a++;
                    "今天" == d[5] ? e.firstCmtDate = (new Date).format("yyyy-MM-dd") : (b = d[6], a = d[7], e.firstCmtDate = d[4] ? d[4] + "-" + b + "-" + a : c + "-" + b + "-" + a);
                    e.auctionSku = d[8];
                    e.nick = d[9].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    e.displayRatePic = d[11]
                }
                return e
            }, l = function() {
                var a, c, d = b.thisExplorer.extension.getURL("../images/imageSprite.gif");
                $(".rate-grid tr").each(function() {
                    content = $(this).html();
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var l = e(content);
                    0 < l.nick.length && (indexKey = l.firstCmtDate.slice(0, 10) + l.nick + l.auctionSku + l.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (l = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = l.resultType, c = l.resultRemark, $(this).find(".tm-col-master").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + c
                    }))), $(".xuanyou_img").css("background-image", "url(" + d + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $("#J_TabBarBox").click(function() {
            b.com_xuanyouwang_modules.findCommentArea();
            $("#J_TabBarBox").unbind("click")
        });
        $("#J_Reviews").delegate("a", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function U() {
        var a = 0;
        (new Date).getFullYear();
        b.com_xuanyouwang_product.repeatCounter = 0;
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var d = 1,
                d = $("#comment").html(),
                e = $("#comments-list").html();
            if (d && 0 <= d.indexOf("comments-item") || e && 0 <= e.indexOf("comments-item") || d && 0 <= d.indexOf("comment-item") || e && 0 <= e.indexOf("comment-item")) return d = d && 0 <= d.indexOf("comments-item") || e && 0 <= e.indexOf("comments-item") ? 1 : 2, c(d), a || ($(".tab-main li").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".m-tab-trigger li").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), a = 1), $(".ui-page a").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            b.com_xuanyouwang_product.repeatCounter++;
            600 > b.com_xuanyouwang_product.repeatCounter && setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        };
        var c = function(a) {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            1 == a ? $(".comments-item").each(function() {
                content = $(this).html();
                content = content.replace(/>\s+</g, "><");
                var c = d(content, a);
                0 < c.nick.length && (indexKey = c.firstCmtDate.slice(0, 10) + c.nick + c.firstComment.slice(0, 6), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: c.nick,
                    displayRatePic: c.displayRatePic,
                    auctionSku: c.auctionSku,
                    firstComment: c.firstComment,
                    appendComment: c.appendComment,
                    reply: c.reply,
                    firstCmtDate: c.firstCmtDate,
                    appendDays: c.appendDays,
                    firstPicNails: c.firstPicNails,
                    firstPics: c.firstPics,
                    appendPicNails: c.appendPicNails,
                    appendPics: c.appendPics
                }))
            }) : $(".comment-item").each(function() {
                content = $(this).html();
                content = content.replace(/>\s+</g, "><");
                var c = d(content, a);
                0 < c.nick.length && (indexKey = c.firstCmtDate.slice(0, 10) + c.nick + c.firstComment.slice(0, 6), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: c.nick,
                    displayRatePic: c.displayRatePic,
                    auctionSku: c.auctionSku,
                    firstComment: c.firstComment,
                    appendComment: c.appendComment,
                    reply: c.reply,
                    firstCmtDate: c.firstCmtDate,
                    appendDays: c.appendDays,
                    firstPicNails: c.firstPicNails,
                    firstPics: c.firstPics,
                    appendPicNails: c.appendPicNails,
                    appendPics: c.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            e(a);
            t();
            u()
        }, d = function(b, a) {
                var c, d, e, q;
                d = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                if (c = (1 == a ? /class="comment-time type-item">(.*?)<\/div>.*?class="p-comment">(.*?)<\/div>.*?<\/ul><\/div>(<div class="J-p-show-img.*?div class="J-big-photo p-photos hide"><\/div>)?.*?<div class="user-item.*?src="([^"]+)".*?class="user-name">(.*?)<\/div>/i : /class="user-info".*?src="([^"]+)".*?alt="([^"]+)".*?"comment-con">(.*?)<\/p>(<div class="pic-list.*?<\/div>)?.*?<div class=\"order-info\">(.*?)<\/div>.*?<\/div><\/div>(<div class=\"append-comment.*?\u8d2d\u4e70(\d+|\u5f53)\u5929.*?<p class=\"comment-con\">(.*?)<\/p>(<div class=\"pic-list.*?<\/div>)?)?/i).exec(b))
                    if (1 == a) {
                        d.firstCmtDate = c[1];
                        d.firstComment = c[2];
                        if (c[3])
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[3]));) d.firstPicNails[e] = images[1], d.firstPics[e] = images[1].replace(/76x76/, "616x405"), e++;
                        d.displayRatePic = c[4];
                        d.nick = c[5]
                    } else {
                        d.displayRatePic = c[1];
                        d.nick = c[2];
                        d.firstComment = c[3];
                        if (c[4])
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[4]));) d.firstPicNails[e] = images[1], d.firstPics[e] = images[1].replace(/48x48/, "616x405"), e++;
                        e = c[5].replace(/<[^>]+>/g, " ");
                        if (q = /\d+-\d+-\d+ \d+:\d+/.exec(e)) d.firstCmtDate = q[0], d.auctionSku = e.replace(d.firstCmtDate, "");
                        if (c[6] && (d.appendDays = "当" == c[7] ? 0 : c[7], d.appendComment = c[8], c[9]))
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[9]));) d.appendPicNails[e] = images[1], d.appendPics[e] = images[1].replace(/48x48/, "616x405"), e++
                    }
                return d
            }, e = function(a) {
                function c(a, d) {
                    var e = null,
                        l;
                    b.com_xuanyouwang_product.defaultCommentsIndex[d] && (0 <= a.indexOf("zhongping") ? (e = "xuanyou_youyouagree", l = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= a.indexOf("chaping") ? (e = "xuanyou_youyouagree", l = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (l = v(b.com_xuanyouwang_product.defaultCommentsIndex[d]), e = l.resultType, l = l.resultRemark), e = $("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + e
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + l
                    })));
                    return e
                }
                var e = "",
                    k = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    f = $("#comment .tab-main li.current").attr("clstag");
                void 0 === f && (f = $("#comments-list .m-tab-trigger li.curr").attr("clstag"));
                1 == a ? $(".comments-item").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var b = d(content, a);
                    0 < b.nick.length && (indexKey = b.firstCmtDate.slice(0, 10) + b.nick + b.firstComment.slice(0, 6), e = c(f, indexKey)) && ($(this).find(".column2").append(e), $(".xuanyou_img").css("background-image", "url(" + k + ")"))
                }) : $(".comment-item").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var b = d(content, a);
                    0 < b.nick.length && (indexKey = b.firstCmtDate.slice(0, 10) + b.nick + b.firstComment.slice(0, 6), e = c(f, indexKey)) && ($(this).find(".comment-column").append(e), $(".xuanyou_img").css("background-image", "url(" + k + ")"))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $(".tab-main li").click(function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $(".ui-page a").click(function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $("#comment").delegate("a", "click", function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function V() {
        b.com_xuanyouwang_product.repeatCounter = 0;
        (new Date).getFullYear();
        var a = "";
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var d = $("#buyer_experience").html();
            if (d && d != a && 0 <= d.indexOf("item good-comment") && 0 <= d.indexOf("comment_type") && 0 > d.indexOf("xuanyou")) return a = d, c(), $("#buyer_experience").delegate(".comment_type", "click", function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $("#buyer_experience").delegate(".latestnewpageboxinner li", "click", function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            b.com_xuanyouwang_product.repeatCounter++;
            600 > b.com_xuanyouwang_product.repeatCounter && setTimeout(com_xuanyouwang_modules.findCommentArea, 500)
        };
        var c = function() {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            $("#div_pe_clist .item").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = d(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            e();
            t();
            u()
        }, d = function(a) {
                var c, d, e;
                d = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                c = /src=\"(.*?)\"[\s\S]*?username=\"(.*?)\"[\s\S]*?<span class=\"text comment_content_text\".*?>([\s\S]*?)<\/span><div class=\"open_all\"[\s\S]*?<\/div><\/dd>(<dd class=\"pro_show jsPublishComment\"[\s\S]*?<\/div><\/dd>)?(<dd class=\"add_con[\s\S]*?<div class=\"time\">([\s\S]*?)<\/div>[\s\S]*?<b>\u8ffd\u52a0\uff1a<\/b><p>([\s\S]*?)<\/p>.*?<\/div><\/dd>)?[\s\S]*?class=\"date\">([\s\S]*?)<\/span>/i;
                if (a = c.exec(a)) {
                    d.displayRatePic = a[1];
                    d.nick = a[2].replace(/<[^>]+>/g, "");
                    d.firstComment = a[3].replace(/<[^>]+>/g, "");
                    if (a[8]) {
                        c = /\d+-\d+-\d+ \d+:\d+:\d+/g;
                        if (c = c.exec(a[8])) d.firstCmtDate = c[0];
                        c = new RegExp("s*" + d.firstCmtDate);
                        c = a[8].replace(c, "");
                        0 < c.length && (d.auctionSku = c)
                    }
                    if (a[4])
                        for (e = /src="([^"]+)"/g, c = 0; null !== (images = e.exec(a[4]));) d.firstPicNails[c] = images[1], d.firstPics[c] = images[1].replace(/128x96/, "400x400"), c++;
                    a[5] && (a[6] && (d.appendDays = b.com_xuanyouwang_modules.dateDiff(a[6], d.firstCmtDate)), d.appendComment = a[7].replace(/<[^>]+>/g, ""))
                }
                return d
            }, e = function() {
                var a, c, e = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    k = $(".comment_type li.cur").attr("tag");
                $("#div_pe_clist .item").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var f = d(content);
                    0 < f.nick.length && (indexKey = f.firstCmtDate + f.nick + f.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (0 <= k.indexOf("general") ? (a = "xuanyou_youyouagree", c = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= k.indexOf("bad") ? (a = "xuanyou_youyouagree", c = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (f = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = f.resultType, c = f.resultRemark), $(this).find("dl").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + c
                    }))), $(".xuanyou_img").css("background-image", "url(" + e + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $(".des_tab").click(function() {
            b.com_xuanyouwang_modules.findCommentArea()
        });
        $("#buyer_experience").delegate("a", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $("#buyer_experience").delegate("li", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function W() {
        b.com_xuanyouwang_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var c = $("#comment_all").html();
            if (c && 0 <= c.indexOf("comment_items") && 0 <= c.indexOf("comment_tabs") && 0 > c.indexOf("xuanyou")) return a(), $(".paginating li").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".fanye a").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".comment_sort").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            b.com_xuanyouwang_product.repeatCounter++;
            600 > b.com_xuanyouwang_product.repeatCounter && setTimeout(com_xuanyouwang_modules.findCommentArea, 500)
        };
        var a = function() {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            $(".comment_items").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            d();
            t();
            u()
        }, c = function(a) {
                var c, d, h;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                if (a = /<div class=\"describe_detail\"><span>(.*?)<\/span><\/div>(<ul class=\"pic_show.*?<\/ul>)?.*?<div class=\"starline clearfix\">(.*?)<\/div>.*?<span class=\"name\".*?>(.*?)<\/span><span class=\"level level(\d*)\">/i.exec(a)) {
                    c.displayRatePic = a[5] ? b.com_xuanyouwang_status.extension.baseURL + "images/dangdang_v" + parseInt(a[5]) + ".gif" : b.com_xuanyouwang_status.extension.baseURL + "images/dangdang_v0.gif";
                    c.nick = a[4];
                    c.firstComment = a[1].replace(/<[^>]+>/g, "");
                    d = a[3].replace(/<[^>]+>/g, "");
                    if (h = /\d+-\d+-\d+ \d+:\d+:\d+/.exec(d)) c.firstCmtDate = h[0], c.auctionSku = d.replace(c.firstCmtDate, ""), c.auctionSku = c.auctionSku.replace("已购", "");
                    if (a[2])
                        for (h = /src="([^"]+)".*?big="([^"]+)"/g, d = 0; null !== (images = h.exec(a[2]));) c.firstPicNails[d] = images[1], c.firstPics[d] = images[2], d++
                }
                return c
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    h = $(".comment_tabs span.on").attr("dd_name");
                $(".comment_items").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("中评") ? (a = "xuanyou_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("差评") ? (a = "xuanyou_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".items_right").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + d
                    }))), $(".xuanyou_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $("#comment_tab").click(function() {
            b.com_xuanyouwang_modules.findCommentArea()
        });
        $("#comment_all").delegate("a", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $("#comment_num_tab").delegate("span", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function X() {
        b.com_xuanyouwang_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var c = $("#j-comment-section").html();
            if (c && 0 <= c.indexOf("replyListWrap") && 0 <= c.indexOf("appraiseType") && 0 <= c.indexOf("j-page") && 0 > c.indexOf("xuanyou")) return a(), $(".appraiseType").delegate("label", "click", function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $("#j-page").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), !0;
            b.com_xuanyouwang_product.repeatCounter++;
            600 > b.com_xuanyouwang_product.repeatCounter && setTimeout(com_xuanyouwang_modules.findCommentArea, 500)
        };
        var a = function() {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            $(".replyListWrap li.oh").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            d();
            t();
            u()
        }, c = function(a) {
                var c;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                if (a = /class="bgiprd">.*?(\d+-\d+-\d+ \d+:\d+).*?<\/a><\/p>(<p>.*?<\/p>)?.*?class="shiyongxinde oh">([\s\S]*?)<\/div>.*?<div class="reply-center-inner">(<div class="shiyongxinde oh">(.*?)<span class="fr">(.*?)<\/span><\/div>)?<\/div>.*?class="reply_avatar".*?src="([^"]+)".*?class="reply_avatar_userName">(.*?)<\/span>/i.exec(a)) c.firstCmtDate = a[1], a[2] && (c.auctionSku = a[2].replace(/<[^>]+>/g, "")), c.firstComment = a[3].replace(/<[^>]+>|\u4f7f\u7528\u5fc3\u5f97\uff1a/g, ""), a[5] && (c.appendComment = a[5].replace(/<[^>]+>/g, ""), a[6] && (c.appendDays = b.com_xuanyouwang_modules.dateDiff(a[6], a[1]))), c.displayRatePic = a[7], c.nick = 0 < a[8].length ? a[8] : "无昵称用户";
                return c
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    h = $(":radio:checked").attr("appraisetypetype");
                $(".replyListWrap li.oh").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("mid") ? (a = "xuanyou_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("bad") ? (a = "xuanyou_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".reply-center").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + d
                    }))), $(".xuanyou_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $(".pingjia_header").click(function() {
            b.com_xuanyouwang_modules.findCommentArea()
        });
        $(".appraiseType").delegate("label", "click", function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $("#j-page").click(function() {
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function Y() {
        b.com_xuanyouwang_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.com_xuanyouwang_modules.findCommentArea = function() {
            var c = $("#appraise").html();
            if (c && 0 <= c.indexOf("rv-target-list") && 0 > c.indexOf("{{ commodityReviewId }}") && 0 <= c.indexOf("rv-main-item") && 0 <= c.indexOf("ui-page") && 0 <= c.indexOf("rv-main-filter") && 0 > c.indexOf("xuanyou")) return a(), $(".rv-main-item").delegate("li", "click", function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".ui-page").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
            }), $(".rv-filter-sort").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 2E3)
            }), $("#rv-funny-mode-checkbox").change(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 2E3)
            }), $(".rv-rate-item a").click(function() {
                b.com_xuanyouwang_product.repeatCounter = 0;
                setTimeout(com_xuanyouwang_modules.findCommentArea, 2E3)
            }), !0;
            b.com_xuanyouwang_product.repeatCounter++;
            30 > b.com_xuanyouwang_product.repeatCounter && setTimeout(com_xuanyouwang_modules.findCommentArea, 2E3)
        };
        var a = function() {
            b.com_xuanyouwang_product.defaultComments || (b.com_xuanyouwang_product.defaultComments = []);
            $(".rv-target-list").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && b.com_xuanyouwang_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
            0 == b.com_xuanyouwang_status.extension.preRead && (b.com_xuanyouwang_product.defaultCommentNum = 0);
            b.com_xuanyouwang_modules.analyzeCommentData();
            d();
            t();
            u()
        }, c = function(a) {
                var b, c, d;
                b = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                if (a = /<div class="username">(.*?)<\/div>.*?<p class="body-content">([\s\S]*?)<\/p>(<div class="body-images clearfix">.*?<\/div><\/div><\/div><\/div><\/div><\/div>)?(<div class="body-reply">.*?\[((\d+)\u5929\u540e\u8ffd\u52a0|\u5f53\u5929\u8ffd\u52a0)\]<\/em>([\s\S]*?)<\/p>(<div class="body-images clearfix">.*?<\/dl><\/div>)?.*?<\/div><\/div>)?<div class="body-info clearfix">.*?class="date l"><span>(.*?)<\/span>/i.exec(a)) {
                    b.nick = a[1].replace(/<[^>]+>/g, "");
                    b.firstComment = a[2].replace(/<[^>]+>/g, "");
                    if (a[3])
                        for (d = /src="([^"]+)"/g, c = 0; null !== (images = d.exec(a[3]));) - 1 < images[1].indexOf("400x400") || (b.firstPicNails[c] = images[1], b.firstPics[c] = images[1].replace(/100x100/, "400x400"), c++);
                    if (a[4] && (b.appendDays = "当天追加" == a[5] ? 0 : a[6], b.appendComment = a[7].replace(/<[^>]+>/g, ""), a[8]))
                        for (d = /src="([^"]+)"/g, c = 0; null !== (images = d.exec(a[8]));) - 1 < images[1].indexOf("400x400") || (b.appendPicNails[c] = images[1], b.appendPics[c] = images[1].replace(/100x100/, "400x400"), c++);
                    b.firstCmtDate = a[9]
                }
                return b
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../images/imageSprite.gif"),
                    h = $(".rv-main-wrap li.now").attr("data-type");
                $(".rv-target-list").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("xuanyou")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.com_xuanyouwang_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("normal") ? (a = "xuanyou_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("bad") ? (a = "xuanyou_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.com_xuanyouwang_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".topic-main").append($("<div>", {
                        "class": "xuanyou-tm-comment"
                    }).append($("<i>", {
                        "class": "xuanyou_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "商品口碑助手：" + d
                    }))), $(".xuanyou_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.com_xuanyouwang_modules.findCommentArea();
        $("#productCommTitle").click(function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            b.com_xuanyouwang_modules.findCommentArea()
        });
        $("#appraise").delegate("li", "click", function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        });
        $("#appraise").delegate("a", "click", function() {
            b.com_xuanyouwang_product.repeatCounter = 0;
            setTimeout(com_xuanyouwang_modules.findCommentArea, 1E3)
        })
    }

    function Z(a) {
        for (var c, d, e, l, n, h, k, f = /class=\"a-section review\"[\s\S]*?class=\"a-icon-alt\">([\d.]+) \u9897\u661f[\s\S]*?\u7559\u8a00\u8005[\s\S]*?author\"[\s\S]*?\">([\s\S]*?)<\/a>[\s\S]*?review-date\">\u4e8e ([\s\S]*?)<\/span>[\s\S]*?review-text\">([\s\S]*?)<\/span>/ig, q = 0; null !== (d = f.exec(a));) q++, l = [], n = [], h = [], k = [], c = d[2], e = d[3], d = d[4], b.com_xuanyouwang_product.defaultComments.push({
            nick: c,
            displayRatePic: "",
            auctionSku: "",
            firstComment: d,
            appendComment: "",
            reply: "",
            firstCmtDate: e,
            appendDays: 0,
            firstPicNails: n,
            firstPics: l,
            appendPicNails: k,
            appendPics: h
        });
        return q
    }
    r.namespaces = {
        html: "http://www.w3.org/1999/xhtml",
        xul: "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
    };
    r.defaultNamespace = r.namespaces.html;
    b.com_xuanyouwang_modules.getCommentData_taobao = function(a) {
        var c;
        if (!b.com_xuanyouwang_product.itemId || !b.com_xuanyouwang_product.sellerId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://rate.taobao.com/feedRateList.htm?auctionNumId=" + b.com_xuanyouwang_product.itemId + "&userNumId=" + b.com_xuanyouwang_product.sellerId + "&siteID=&currentPageNum=" + a + "&pageSize=20&rateType=&orderType=sort_weight&showContent=1&attribute=&folded=0&ua="
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = C(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 10 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_taobao(++a)
            }, 3E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u(), c = C(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 10 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_taobao(++a)
            }, 3E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_tmall = function(a) {
        var c;
        if (!b.com_xuanyouwang_product.itemId || !b.com_xuanyouwang_product.sellerId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://rate.tmall.com/list_detail_rate.htm?itemId=" + b.com_xuanyouwang_product.itemId + "&spuId=&sellerId=" + b.com_xuanyouwang_product.sellerId + "&order=3&currentPage=" + a + "&append=0&content=1&tagId=&posi=&picture=0&ua="
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = K(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 10 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_tmall(++a)
            }, 3E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_jd = function(a) {
        var c;
        if (!b.com_xuanyouwang_product.itemId) return !1;
        a || (a = 1);
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://s.club.jd.com/productpage/p-" + b.com_xuanyouwang_product.itemId + "-s-0-t-3-p-" + a + ".html"
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = L(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 20 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_jd(++a)
            }, 2E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_yhd = function(a) {
        var c, d;
        if (!b.com_xuanyouwang_product.itemId || !b.com_xuanyouwang_product.productId) return !1;
        1 == a ? d = "http://e.yhd.com/front-pe/productExperience/proExperienceAction!ajaxView_pe.do?product.id=" + b.com_xuanyouwang_product.productId + "&merchantId=" + $("#merchantId").val() + "&filter.orderType=newest&pagenationVO.rownumperpage=10&currSiteId=1&f=1&currSiteType=1&isBestCity=0&isFresh=0" : (d = new Date, d = d.format("D n d hh:mm:ss") + " UTC+0800 " + d.getFullYear(), d = d.replace(/\s/g, "%20"), d = "http://e.yhd.com/front-pe/productExperience/proExperienceAction!ajaxView_pe.do" + ("?product.id=" + b.com_xuanyouwang_product.productId + "&merchantId=" + $("#merchantId").val() + "&filter.orderType=newest&pagenationVO.currentPage=" + a + "&pagenationVO.preCurrentPage=" + (1 == a ? "undefined" : a - 1) + "&pagenationVO.rownumperpage=10&currSiteId=1&currSiteType=1&filter.commentFlag=&filter.sortFlag=&tt=" + d + "&isBestCity=0&isFresh=0"));
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: d
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = M(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 20 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_yhd(++a)
            }, 2E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_dangdang = function(a) {
        var c;
        if (!b.com_xuanyouwang_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "http://product.dangdang.com/index.php?r=comment%2Flist&productId=" + b.com_xuanyouwang_product.itemId + "&categoryPath=&mainProductId=" + b.com_xuanyouwang_product.itemId + "&mediumId=0&pageIndex=" + a + "&sortType=1&filterType=1&isSystem=1&tagId=0&tagFilterCount=0"
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = N(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 40 >= a && 50 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                b.com_xuanyouwang_modules.getCommentData_dangdang(++a)
            }, 1E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_amazon = function(a) {
        var c;
        if (!b.com_xuanyouwang_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "//www.amazon.cn/product-reviews/" + b.com_xuanyouwang_product.itemId + "/ref=cm_cr_arp_d_paging_btm_next_2?showViewpoints=1&pageNumber=" + a
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = Z(d), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 20 >= a && 100 > b.com_xuanyouwang_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_amazon(++a)
            }, 1E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_guomei = function(a) {
        if (!b.com_xuanyouwang_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "//ss.gome.com.cn/item/v1/prdevajsonp/appraiseModuleAjax/" + b.com_xuanyouwang_product.itemId + "/" + a + "/validgood/flag/appraise/validgood"
        }, function(c) {
            c = c.returnedData;
            0 < c.length && (O(c), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 20 >= a && 100 > b.com_xuanyouwang_product.defaultCommentNum ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_guomei(++a)
            }, 1E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_modules.getCommentData_suning = function(a) {
        if (!b.com_xuanyouwang_product.itemId) return !1;
        var c = document.createElement("script");
        c.textContent = 'var xuanyou_input = document.createElement("input");\nxuanyou_input.type = "hidden";\nxuanyou_input.id="xuanyou_input";\nxuanyou_input.value = JSON.stringify(sn);\n(document.head||document.documentElement).appendChild(xuanyou_input);';
        (document.head || document.documentElement).appendChild(c);
        c.parentNode.removeChild(c);
        var c = $("#xuanyou_input").val(),
            d = JSON.parse(c),
            c = {}, e = ("s" == d.prdType.toLowerCase() ? d.passPartNumber : d.partNumber) || d.partNumber,
            c = "//review.suning.com/ajax/review_lists/" + [
                function() {
                    var a = d.prdType.toLowerCase();
                    return "s" == a ? "style" : "t" == a ? "package" : "general"
                }(), e, c.isProReview ? "" : "-1" == d.shopType ? "" : "0" == d.shopType ? "0000000000" : d.vendorCode, c.isProReview ? d.reviewType : "total", a, "default-10-----reviewList"
            ].join("-") + ".htm";
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: c
        }, function(c) {
            c = c.returnedData;
            0 < c.length && (P(c), b.com_xuanyouwang_modules.analyzeCommentData(), t(), 20 >= a && 100 > b.com_xuanyouwang_product.defaultCommentNum ? setTimeout(function() {
                com_xuanyouwang_modules.getCommentData_suning(++a)
            }, 1E3) : (b.com_xuanyouwang_product.defaultCommentNum = 0, b.com_xuanyouwang_modules.analyzeCommentData(), b.com_xuanyouwang_product.sincereCommentNum = 0, b.com_xuanyouwang_product.sosoCommentNum = 0, b.com_xuanyouwang_product.badCommentNum = 0, b.com_xuanyouwang_product.normalCommentNum = 0, b.com_xuanyouwang_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.com_xuanyouwang_product.checkTimes = 0;
    b.com_xuanyouwang_modules.getRecommendExecute = function(a, c) {
        var d = function() {
            b.thisExplorer.runtime.sendMessage({
                getRecommendProducts: b.com_xuanyouwang_config.settings.productRecommendUrl,
                word: a,
                sort: c,
                price: b.com_xuanyouwang_product.price,
                shopType: b.com_xuanyouwang_config.options.goldShopType,
                shopSort: b.com_xuanyouwang_config.options.goldShopSort,
                website: b.com_xuanyouwang_product.websiteId,
                name: b.com_xuanyouwang_product.name,
                itemId: b.com_xuanyouwang_product.itemId,
                productId: b.com_xuanyouwang_product.productId
            }, function(a) {
                a = JSON.parse(a.recommendProducts);
                E(a);
                "sogou" == b.com_xuanyouwang_config.settings.explorerType && 3 > b.com_xuanyouwang_product.websiteId && z(2, 0)
            });
            "sogou" != b.com_xuanyouwang_config.settings.explorerType && 3 > b.com_xuanyouwang_product.websiteId && z(2, 0)
        };
        1 == b.com_xuanyouwang_product.websiteId ? function() {
            1 != b.com_xuanyouwang_product.websiteId && d();
            var e = $("#J_PromoPriceNum").html();
            20 < b.com_xuanyouwang_product.checkTimes || e && 1 < e.length ? (e && 1 < e.length && (reg = /[\d.]+/i, matches = reg.exec(e)) && (price = parseFloat(matches[0]), b.com_xuanyouwang_product.price > price && 0 < price && (b.com_xuanyouwang_product.price = price)), d()) : (b.com_xuanyouwang_product.checkTimes++, setTimeout(com_xuanyouwang_modules.getRecommendExecute(a, c), 100))
        }() : d()
    };
    b.com_xuanyouwang_modules.startFromHere = function(a) {
        F();
        if ("firefox" == b.com_xuanyouwang_config.settings.explorerType && 8 == b.com_xuanyouwang_product.websiteId) return !1;
        if (3 >= b.com_xuanyouwang_product.name.length || !b.com_xuanyouwang_product.price && 3 > b.com_xuanyouwang_product.websiteId) return 10 > a && setTimeout(function() {
            com_xuanyouwang_modules.startFromHere(++a)
        }, 2E3), !1;
        D();
        b.com_xuanyouwang_modules.loadConfig(R);
        b.com_xuanyouwang_modules.checkUpdate()
    };
    b.com_xuanyouwang_modules.startFromHere(1)
})(window);