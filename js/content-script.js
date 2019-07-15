(function(b) {
    //解析要插入的HTML标签
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
    //侧边栏的载入
    function loadLeft() {
        var c = ["html:div", {
                "class": "nfc_footbar"
            },
            ["html:div", {
                    "class": "nfc_left"
                },
                ["html:div",{
                     id: "logo_href",
                     "class":"nfc_left_item"
                 },
                    ["html:a", {
        
                        href: "http://www.taobao.com",
                        target: "_blank"
                    },
                        ["html:div", {
                            id: "nfc_logo"
                            
                        }]
                    ],
                    ["html:div",{
                            id:"nfc_headline",
                            "class":"headline",                      
                            },"怕刷单",
                             ["html:br"],
                             "看这里"
                    ]
                ],
                
                ["html:div", {
                    "class": " nfc_split"
                    }
                ],
                ["html:div", {
                        id: "nfc_comments",
                                "class": "nfc_item nfc_left_item"
                        },
                        ["html:i", {
                            "class": "nfc_img"
                        }],  
                        ["html:span",{

                        },"已获取的评论数量"],

                        ["html:div", {
                                    "class": "nfc_numHint"
                            },
                            /*["html:i", {}]*/
                        ],
                        ["html:div", {
                                id: "nfc_comContent"
                            },
                            ["html:div", {
                                id: "nfc_comHeader"
                            },
                            ["html:span", {
                                id: "nfc_productGrade"
                            }],
                            ["html:span", {
                                id: "nfc_commentType"
                            }, "可信评论（筛选的结果)"]
                        ],
                        ["html:div", {
                            id: "nfc_sincereCom",
                            "class": "nfc_comDetails"
                        }, "    暂时没有找到可信评论。"],
                        ["html:div", {
                            id: "nfc_sosoCom",
                            "class": "nfc_comDetails"
                        }, "    暂时没有找到可疑评论。"],
                        ["html:div", {
                            id: "nfc_badCom",
                            "class": "nfc_comDetails"
                        }, "    暂时没有找到假的评论。"],
                        
                        ["html:div", {
                                id: "nfc_comTags"
                            },
                            ["html:div", {
                                id: "nfc_sincereTag",
                                "class": "nfc_comTag"
                            }, "可信评论(0)"],
                            ["html:div", {
                                id: "nfc_sosoTag",
                                "class": "nfc_comTag"
                            }, "可疑评论(0)"],
                            ["html:div", {
                                id: "nfc_badTag",
                                "class": "nfc_comTag"
                            }, "假的评论(0)"]
                        ]
                    ],
                    ["html:div", {
                            "class": "nfc_arrowCover"
                        },
                        ["html:div", {
                            "class": "nfc_downArrow"
                        }]
                    ]
                ],
                ["html:div", {
                        "class": " nfc_split"
                }],
                ["html:div",{
                                id:"nfc_readInCommentArea",
                                "class":"nfc_left_item"
                            },
                            ["html:div",{
                                id:"read_header"
                                }, 
                                    ["html:button",{
                                       id:"showTime"
                                    },"评论区直接显示"

                                    ]
                                
                            ],
                           
                ],
                /*["html:div", {
                            "class": "nfc_warning nfc_left_item",
                            id: "nfc_fakeWarning"
                }],*/
                ["html:div", {
                        "class": " nfc_split"
                }],
                ["html:div",{
                                id:"nfc_credit",
                                "class":"nfc_left_item"
                            },
                            ["html:div",{
                                id:"summ_header",
                                "class":"summary"
                                }, "店铺信誉"
                            ],
                           
                            ["html:div",{
                                id:"summary_result",
                                "class":"summary"
                            },
                            "可信度高"
                            ]
                ],
                ["html:div", {
                        "class": " nfc_split"
                }],
                ["html:div",{
                     id:"nfc_setting",
                     "class":"nfc_left_item"
                },["html:a", {
                        href: b.nfc_status.extension.baseURL + "options.html",
                        target: "_blank"
                    },
                    ["html:div", {
                            id: "nfc_config",
                            "class": "nfc_citem"
                        },
                        ["html:i", {
                            "class": "nfc_img"
                        }], 
                        ["html:span",{

                        },
                        "设置"]
                        
                    ]
                    ]
                ],
                
                ["html:div", {
                    id:"nfc_last2split",
                    "class": " nfc_split"
                }],
                ["html:div", {
                        id: "nfc_share",
                        "class": "nfc_citem nfc_left_item"
                    },
                    ["html:i", {
                        "class": "nfc_img"
                    }], ["html:span",{

                    },"分享"
                    ], 

                        ["html:div", {
                            id: "nfc_sharePart"
                        },
                            ["html:a", {
                                    id:"1",
                                    href: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+'url=' + encodeURIComponent(document.location)+ '&showcount=0' + '&desc=' + encodeURIComponent(b.nfc_share.des),
                                    target:"_blank"
                                },
                                ["html:div", {
                                        id: "nfc_qzoneShare",
                                        "class": "nfc_shareItem"
                                    },
                                    ["html:i", {
                                        "class": "nfc_img"
                                    }],
                                    ["html:span", {}, "QQ空间"]
                                ]
                            ],
                            ["html:a", {
                                    id:"2",
                                    href: 'http://v.t.sina.com.cn/share/share.php?'+ 'url=' + encodeURIComponent(document.location) + '&title=' + encodeURIComponent(b.nfc_share.des),
                                    target: "_blank"
                                },
                                ["html:div", {
                                        id: "nfc_weiboShare",
                                        "class": "nfc_shareItem"
                                    },
                                    ["html:i", {
                                        "class": "nfc_img"
                                    }],
                                    ["html:span", {}, "微博"]
                                ]
                            ],
                            ["html:a", {
                                    id:"4",
                                    href: "http://connect.qq.com/widget/shareqq/index.html?url="+ encodeURIComponent(document.location) + "&showcount=0&desc=" + encodeURIComponent(b.nfc_share.des) ,
                                },
                                ["html:div", {
                                        id: "nfc_qqShare",
                                        "class": "nfc_shareItem"
                                       
                                    },
                                    ["html:i", {
                                        "class": "nfc_img"
                                    }],
                                    ["html:span", {}, "QQ"]
                                ]
                            ]
                    ],
                    ["html:div", {
                            "class": "nfc_arrowCover"
                        },
                        ["html:div", {
                            "class": "nfc_downArrow"
                        }]
                    ]
                ],
                             
            ],
            ["html:div", {
                    "class": "nfc_right"
                },
                ["html:div", {
                    id: "nfc_min",
                    title: "最小化"
                }],
                ["html:div", {
                    id: "nfc_max",
                    title: "最大化"
                    
                }]
            ]
        ];
        document.body.appendChild(r(c, document, {}));
        c = b.thisExplorer.extension.getURL("../img/logo3_5.png");
        $("#nfc_logo").css("background-image", "url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../img/imageSprite2.png");
        $(".nfc_img").css("background-image", "url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../img/pyq1.png");
        $(".nfc_pyq").css("background-image","url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../img/upArrow.png");
        $("#nfc_min").css("background-image","url(" + c + ")");
        c = b.thisExplorer.extension.getURL("../img/downArrow.png");
        $("#nfc_max").css("background-image","url(" + c + ")");
          /*c = b.thisExplorer.extension.getURL("../img/bgImg.png");
          $(".nfc_left_item").css("background-image", "url(" + c + ")");*/
       /* $(".nfc_footbar").css("background-image", "url(" + c + ")");*/
        c = b.thisExplorer.extension.getURL("../img/split.png");
        $(".nfc_split").css("background-image","url(" + c + ")");
       /* c = b.thisExplorer.extension.getURL("../img/android_barcode.png");
        $("#nfc_android_barcode").css("background-image", "url(" + c + ")");*/
        var l = (new Date).format("yyyy-MM-dd");
        /*"2016-11-11" >= l && (void 0 == localStorage.advertShowDate || localStorage.advertShowDate < l) && (c = b.thisExplorer.extension.getURL("../images/advertise8.gif"), $("#nfc_advertImg").css("background-image", "url(" + c + ")"), $("#nfc_advertise").show());*/
        void 0 === localStorage.expanded || 1 == localStorage.expanded ? ($("#nfc_setting").show(), $("#nfc_share").show(), $("#nfc_min").show(), $("#nfc_max").hide(), $("#nfc_last2split").show(), $("#nfc_lastSplit").show() ,$(".nfc_left").css("height", "330px"), $(".nfc_footbar").css("height", "350px")) : ($("#nfc_setting").hide(), $("#nfc_share").hide(), $("#nfc_min").hide(), $("#nfc_last2split").hide(), $("#nfc_lastSplit").hide() , $("#nfc_max").show(), $(".nfc_left").css("height", "170px"), $(".nfc_footbar").css("height", "180px"));
        $("#nfc_min").click(function() {
            $("#nfc_setting").hide();
            $("#nfc_share").hide();
            $("#nfc_min").hide();
            $("#nfc_max").show();
            $("#nfc_lastSplit").hide();
            $("#nfc_last2split").hide();
            $(".nfc_left").animate({
                height: "220px"
            });
            $(".nfc_footbar").animate({
                height: "240px"
            });
            localStorage.expanded = 0;
            //y()
        });
        $("#nfc_max").click(function() {
            $("#nfc_setting").show();
            $("#nfc_share").show();
            $("#nfc_min").show();
            $("#nfc_lastSplit").show();
            $("#nfc_last2split").show();
            $("#nfc_max").hide();
            $(".nfc_left").css("height", "330px");
            $(".nfc_footbar").animate({
                height: "350px"
            }, "fast");
            localStorage.expanded = 1;
            //y()
        });
        $("#nfc_sendReport").click(function() {
            10 > b.nfc_product.defaultCommentNum && 0 == b.nfc_product.commentDoubtful ? alert("评论数据太少了。") : a()
        });
        $("#nfc_share").click(function() {
            if(b.nfc_share.state == 0){
                $("#nfc_sharePart").show();
                $("#nfc_share .nfc_arrowCover").show();
                b.nfc_share.state = 1;
            }else{
                $("#nfc_sharePart").hide();
                $("#nfc_share .nfc_arrowCover").hide();
                b.nfc_share.state = 0;
            }
           
        });
        /*$("#nfc_share").click(function() {
            $("#nfc_sharePart").hide();
            $("#nfc_share .nfc_arrowCover").hide()
        });*/
        $("#nfc_comments").click(function() {
            $("#nfc_comContent").show();
            $("#nfc_comments .nfc_arrowCover").show();
            $("#nfc_fakeWarning").hide();
            $("#nfc_fakeWarning .nfc_arrowCover").hide()
        });

        $(document).bind('click', function(e){
            var e = e || window.event;
            var elem = e.target || e.srcElement;
            while(elem){
                if(elem.id && elem.id == 'nfc_comments'){
                    return;
                }
                elem = elem.parentNode;
            }
            $("#nfc_comContent").hide();
            $("#nfc_comments .nfc_arrowCover").hide();
        });
     
        $("#nfc_sincereTag").click(function() {
            $("#nfc_sincereCom").show();
            $("#nfc_sosoCom").hide();
            $("#nfc_badCom").hide();
            $("#nfc_sincereTag").css("font-weight", "bold");
            $("#nfc_sosoTag").css("font-weight", "normal");
            $("#nfc_badTag").css("font-weight", "normal");
            $("#nfc_commentType").text("可信评论（筛选的结果)")
        });
        $("#nfc_sosoTag").click(function() {
            $("#nfc_sincereCom").hide();
            $("#nfc_sosoCom").show();
            $("#nfc_badCom").hide();
            $("#nfc_sincereTag").css("font-weight", "normal");
            $("#nfc_sosoTag").css("font-weight", "bold");
            $("#nfc_badTag").css("font-weight", "normal");
            $("#nfc_commentType").text("可疑评论（筛选的结果)")
        });
        $("#nfc_badTag").click(function() {
            $("#nfc_sincereCom").hide();
            $("#nfc_sosoCom").hide();
            $("#nfc_badCom").show();
            $("#nfc_sincereTag").css("font-weight", "normal");
            $("#nfc_sosoTag").css("font-weight", "normal");
            $("#nfc_badTag").css("font-weight", "bold");
            $("#nfc_commentType").text("假的评论（筛选的结果)")
        });

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
        b.nfc_config.settings.historyFakeReportTime = a.time;
        b.nfc_config.settings.historyFakeCode = a.fake;
        b.nfc_config.settings.historyFakeReason = c;
        var d = (new Date).format("yyyy-MM-dd"),
            e = a.time.substring(0, 10);
        90 < b.nfc_configModule.dateDiff(d, e) && (b.nfc_config.settings.historyWarning = 0);
        b.nfc_config.settings.historyWarning && ($("#nfc_fakeWarning").html(""), jsonContent = ["html:div", {
            "class": "nfc_introContent"
        }, "提示：我们于" + a.time + "检测到这个商品疑似有刷单等评价造假行为。刷单的也有好商品，可以考虑购买，但需要提高警惕，不轻信好评，谨防上当。依据：" + c, ["html:div", {
                "class": "nfc_arrowCover"
            },
            ["html:div", {
                "class": "nfc_downArrow"
            }]
        ]], document.getElementById("nfc_fakeWarning").appendChild(r(jsonContent, document, {})), $("#nfc_fakeWarning").show(), $("#nfc_fakeWarning .nfc_arrowCover").show(), setTimeout(function() {
            $("#nfc_fakeWarning").hide();
            $("#nfc_fakeWarning .nfc_arrowCover").hide()
        }, 6E3));
        return !0
    }
    //向左边操作栏里添加评论信息
    function t() {
        for (var a, c, d, e = 1; 3 >= e; e++) {
            switch (e) {
                case 1:
                    c = "sincere";
                    d = "可信评论";
                    break;
                case 2:
                    c = "soso";
                    d = "可疑评论";
                    break;
                case 3:
                    c = "bad";
                    d = "假的评论";
                    break;
            }
            0 >= b.nfc_product[c + "CommentNum"] && ($("#nfc_" + c + "Com").html(""), 0 >= b.nfc_product[c + "Comments"].length && ($("#nfc_" + c + "Com").append($("<p>", {
                text: "暂时没有找到" + d + "。"
            })), b.nfc_status.extension.preRead|| $("#nfc_" + c + "Com").append($("<p>", {
                text: "说明：" + b.nfc_product.websiteName + "开启预读评论功能综合评分会更加准确，如要开启请"
            }).append($("<a>", {
                href: b.nfc_status.extension.baseURL + "options.html#commentPreRead",
                target: "_blank",
                text: "点击这里。"
            })))));
            comments = b.nfc_product[c + "Comments"];
            for (var l, n, h = b.nfc_product[c + "CommentNum"]; h < b.nfc_product[c + "Comments"].length; h++) {
                b.nfc_product[c + "CommentNum"]++;
                n = ["html:div", {
                        "class": "nfc_comList"
                    },
                    ["html:div", {
                            "class": "nfc_comList_left"
                        },
                        ["html:div", {
                                "class": "nfc_firstCom"
                            },
                            ["html:div", {
                                    "class": "nfc_comLeft"
                                },
                                ["html:div", {
                                    "class": "nfc_comTitle"
                                }, "NO." + b.nfc_product[c + "CommentNum"] + " 初次评价:"],
                                ["html:div", {
                                        "class": "nfc_comDate"
                                    },
                                    comments[h].firstCmtDate.slice(0, 11)
                                ],
                                ["html:div", {
                                        "class": "nfc_productInfo"
                                    },
                                    comments[h].auctionSku.replace(/&nbsp;/g, "")
                                ]
                            ],
                            ["html:div", {
                                    "class": "nfc_comRight"
                                },
                                ["html:div", {
                                        "class": "nfc_comText"
                                    },
                                    comments[h].firstComment
                                ],
                                ["html:div", {
                                    "class": "nfc_comPics"
                                }]
                            ]
                        ]
                    ],
                    ["html:div", {
                            "class": "nfc_comList_right"
                        },
                        ["html:div", {
                                "class": "nfc_userName"
                            },
                            comments[h].nick
                        ],
                        ["html:div", {
                            "class": "nfc_userPhoto"
                        }]
                    ]
                ];
                l = r(n, document, {});
                if (0 < comments[h].firstPicNails.length) {
                    n = ["html:ul", {
                        "class": "nfc_comPicList"
                    }];
                    var k = r(n, document, {});
                    a = comments[h].firstPicNails;
                    for (var f in a) n = ["html:li", {
                            "data-src1": comments[h].firstPics[f],
                            "data-src2": c + "_" + b.nfc_product[c + "CommentNum"],
                            "data-src3": "1"
                        },
                        ["html:img", {
                            src: a[f],
                            alt: "晒图"
                        }],
                        ["html:b", {}]
                    ], k.appendChild(r(n, document, {}));
                    l.getElementsByClassName("nfc_comPics")[0].appendChild(k);
                    n = ["html:div", {
                        "class": "nfc_bigImageShow",
                        id: "nfc_bigImage_1_" + c + "_" + b.nfc_product[c + "CommentNum"]
                    }];
                    l.getElementsByClassName("nfc_comPics")[0].appendChild(r(n, document, {}))
                }
                if (0 < comments[h].appendComment.length) {
                    n = ["html:div", {
                            "class": "nfc_appendCom"
                        },
                        ["html:div", {
                                "class": "nfc_comLeft"
                            },
                            ["html:div", {
                                    "class": "nfc_comTitle"
                                },
                                0 < comments[h].appendDays ? "收货" + comments[h].appendDays + "天后追加：" : "当天追加："
                            ]
                        ],
                        ["html:div", {
                                "class": "nfc_comRight"
                            },
                            ["html:div", {
                                    "class": "nfc_comText"
                                },
                                comments[h].appendComment
                            ],
                            ["html:div", {
                                "class": "nfc_comPics"
                            }]
                        ]
                    ];
                    k = r(n, document, {});
                    if (0 < comments[h].appendPicNails.length) {
                        n = ["html:ul", {
                            "class": "nfc_comPicList"
                        }];
                        var q = r(n, document, {});
                        a = comments[h].appendPicNails;
                        for (f in a) n = ["html:li", {
                                "data-src1": comments[h].appendPics[f],
                                "data-src2": c + "_" + b.nfc_product[c + "CommentNum"],
                                "data-src3": "2"
                            },
                            ["html:img", {
                                src: a[f],
                                alt: "晒图"
                            }],
                            ["html:b", {}]
                        ], q.appendChild(r(n, document, {}));
                        k.getElementsByClassName("nfc_comPics")[0].appendChild(q);
                        n = ["html:div", {
                            "class": "nfc_bigImageShow",
                            id: "nfc_bigImage_2_" + c + "_" + b.nfc_product[c + "CommentNum"]
                        }];
                        k.getElementsByClassName("nfc_comPics")[0].appendChild(r(n, document, {}))
                    }
                    l.getElementsByClassName("nfc_comList_left")[0].appendChild(k)
                }
                5 == e && (n = ["html:div", {
                        "class": "nfc_comRemark"
                    },
                    ["html:div", {
                            "class": "nfc_comLeft"
                        },
                        ["html:div", {
                            "class": "nfc_comTitle"
                        }, "可疑的原因："]
                    ],
                    ["html:div", {
                            "class": "nfc_comRight"
                        },
                        ["html:div", {
                                "class": "nfc_comText"
                            },
                            comments[h].remark
                        ]
                    ]
                ], l.getElementsByClassName("nfc_comList_left")[0].appendChild(r(n, document, {})));
                comments[h].displayRatePic && 1 < comments[h].displayRatePic.length && (n = ["html:img", {
                    src: comments[h].displayRatePic,
                    alt: " "
                }], l.getElementsByClassName("nfc_userPhoto")[0].appendChild(r(n, document, {})));
                document.getElementById("nfc_" + c + "Com").appendChild(l)
            }
        }
        a = b.nfc_product.sincereCommentNum + b.nfc_product.sosoCommentNum + b.nfc_product.badCommentNum + b.nfc_product.normalCommentNum + b.nfc_product.doubtCommentNum;
        $("#nfc_comments .nfc_numHint").text(a);
        0 < a && $("#nfc_comments .nfc_numHint").show();
        $("#nfc_sincereTag").text("可信评论(" + b.nfc_product.sincereCommentNum + ")");
        $("#nfc_sosoTag").text("可疑评论(" + b.nfc_product.sosoCommentNum + ")");
        $("#nfc_badTag").text("假的评论(" + b.nfc_product.badCommentNum + ")");
        $(".nfc_comPicList li").children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "img/zoom_in.png), url(" + b.nfc_status.extension.baseURL + "img/zoom_in.cur), auto");
        if(!b.nfc_status.extension.preRead){
            $("#summ_header").html("店铺信誉");
            if(b.nfc_product.summaryResult >= 60){
                $("#summary_result").html("可信度高");
            }else if(b.nfc_product.summaryResult <= 20){
                $("#summary_result").html("可信度差");
            }else{
                $("#summary_result").html("可信度中");
            }
        }
        return !0
    }
    //渲染放大操作
    function u() {
        $(".nfc_comPicList li").unbind("click");
        $(".nfc_bigImageShow").unbind("click");
        $(".nfc_comPicList li").click(function() {
            var a = $(this).attr("data-src1"),
                c = $(this).attr("data-src2"),
                d = $(this).attr("data-src3");
            0 == $(this).children("b").css("opacity") ? ($("#nfc_bigImage_" + d + "_" + c).html("").show(), a = ["html:img", {
                src: a,
                alt: "大图"
            }], document.getElementById("nfc_bigImage_" + d + "_" + c).appendChild(r(a, document, {})), $("#nfc_bigImage_" + d + "_" + c).children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "images/zoom_out.png), url(" + b.nfc_status.extension.baseURL + "images/zoom_out.cur), auto"), $(this).css("border-color", "#f23d6a"), $(this).children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "images/zoom_out.png), url(" + b.nfc_status.extension.baseURL + "images/zoom_out.cur), auto"), $(this).children("b").css("opacity", "1").css("bottom", "-12px"), $(this).siblings().css("border-color", "#f2f2f2"), $(this).siblings().children("b").css("opacity", "0").css("bottom", "-8px"), $(this).siblings().children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "images/zoom_in.png), url(" + b.nfc_status.extension.baseURL + "img/zoom_in.png), auto")) : ($("#nfc_bigImage_" + d + "_" + c).hide(), $(this).css("border-color", "#f2f2f2"), $(this).children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "images/zoom_in.png), url(" + b.nfc_status.extension.baseURL + "images/zoom_in.cur), auto"), $(this).children("b").css("opacity", "0").css("bottom", "-8px"))
        });
        $(".nfc_bigImageShow").click(function() {
            $(this).hide();
            $(".nfc_comPicList li").css("border-color", "#f2f2f2");
            $(".nfc_comPicList li").children("b").css("opacity", "0").css("bottom", "-8px");
            $(".nfc_comPicList li").children("img").css("cursor", "url(" + b.nfc_status.extension.baseURL + "images/zoom_in.png), url(" + b.nfc_status.extension.baseURL + "img/zoom_in.cur), auto")
        })
    }
    //解析购物网站信息，得到商品id，网站主机名，方便后期对于不同网站采用不同分析对策
    function getLocationInfo() {
        var a = window.location.host;
        if (0 <= a.indexOf("taobao.com")) b.nfc_product.websiteId = 1, b.nfc_product.websiteName = "淘宝",b.nfc_product.webOptionsName = "taobao", getTaobaoInfo();
        else if (0 <= a.indexOf("tmall.com") || 0 <= a.indexOf("tmall.hk") || 0 <= a.indexOf("yao.95095.com") || 0 <= a.indexOf("liangxinyao.com")) b.nfc_product.websiteId = 2, b.nfc_product.websiteName = "天猫",b.nfc_product.webOptionsName = "tmall", getTmallInfo();
        else if (0 <= a.indexOf("jd.com")) b.nfc_product.websiteId = 3, b.nfc_product.websiteName = "京东",b.nfc_product.webOptionsName = "jd", getJdInfo();
        else if (0 <= a.indexOf("dangdang.com")) b.nfc_product.websiteId = 4, b.nfc_product.websiteName = "当当",b.nfc_product.webOptionsName = "dd", getDangdangInfo();
        else if (0 <= a.indexOf("amazon.cn")) {
            b.nfc_product.websiteId = 5;
            b.nfc_product.websiteName = "亚马逊";
            b.nfc_product.webOptionsName = "amazon";
            a = $("#productTitle").text();
            b.nfc_product.name = $.trim(a) + "_亚马逊";
            var c = window.location.href,
                a = /\/(product|dp|d)\/(\w+)/i;
            if (a = a.exec(c)) b.nfc_product.itemId = a[2];
            (c = $("#priceblock_ourprice").text()) || (c = $("#priceblock_saleprice").text());
            c || (c = $(".price").text());
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.nfc_product.price = parseFloat(a[0])
        } else if (0 <= a.indexOf("gome.com")) {
            b.nfc_product.websiteId = 6;
            b.nfc_product.websiteName = "国美在线";
            b.nfc_product.webOptionsName = "gome";
            b.nfc_product.name = $("h1").text();
            c = window.location.href;
            a = /[\/-](\w+)-(\w+).html/;
            if (a = a.exec(c)) b.nfc_product.itemId = a[1], b.nfc_product.productId = a[2];
            c = $("#prdPrice").text();
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.nfc_product.price = parseFloat(a[0])
        } else if (0 <= a.indexOf("suning")) {
            b.nfc_product.websiteId = 7;
            b.nfc_product.websiteName = "苏宁易购";
            b.nfc_product.webOptionsName = "suning";
            var a = $("h1").html(),
                c = $("#itemDisplayName").html(),
                d = a;
            c && c.length > a.length && (d = c);
            0 <= d.indexOf("<span") && (d = d.replace(/<span[\s\S]*<\/span>/g, ""));
            b.nfc_product.name = $.trim(d);
            c = window.location.href;
            a = /(\d+)\/(\d+)[^.\/]*?\.html/;
            if (a = a.exec(c)) b.nfc_product.sourceId = a[1], b.nfc_product.itemId = a[2];
            (c = $("#promotionPrice").text()) || (c = $("#promoPrice").text());
            c || (c = $(".mainprice").text());
            a = /[\d.]+/i;
            if (a = a.exec(c)) b.nfc_product.price = parseFloat(a[0])
        }
        return !0
    }
    //淘宝网信息解析
    function getTaobaoInfo() {
        var a = /([\s\S]*?)-(tmall|\u6dd8\u5b9d|\u5929\u732b)[\s\S]*?/i,
            c = document.title.match(a);
        c && (b.nfc_product.name = c[1]);
        var d = $("meta[name='microscope-data']").attr("content"),
            a = /userid=(\d+)/i;
        d && (c = d.match(a));
        c && (b.nfc_product.sellerId = c[1]);
        d = window.location.href;
        a = /id=(\d+)/i;
        if (c = d.match(a)) b.nfc_product.itemId = c[1];
        var e = 0,
            l = "";
        $(".tb-rmb-num").each(function() {
            l = $(this).text();
            a = /[\d.]+/i;
            if (c = a.exec(l))
                if (e = parseFloat(c[0]), 0 == b.nfc_product.price || b.nfc_product.price > e && 0 < e) b.nfc_product.price = e
        });
        return !0
    }
    //天猫网信息解析
    function getTmallInfo() {
        var a = /([\s\S]*?)-(tmall|\u6dd8\u5b9d|\u5929\u732b)[\s\S]*?/i;
        if (a = document.title.match(a)) b.nfc_product.name = a[1];
        var c = $("meta[name='microscope-data']").attr("content");
        void 0 !== c ? (a = /userid=(\d+)/i, a = c.match(a)) : (c = $("#J_SellerInfo").attr("data-url"), a = /user_num_id=(\d+)/i, a = a.exec(c));
        a && (b.nfc_product.sellerId = a[1]);
        c = window.location.href;
        a = /id=(\d+)/i;
        if (a = c.match(a)) b.nfc_product.itemId = a[1];
        var d = 0;
        $(".tm-price").each(function() {
            d = parseFloat($(this).text());
            if (0 == b.nfc_product.price || b.nfc_product.price > d && 0 < d) b.nfc_product.price = d
        });
        return !0
    }
    //京东信息解析
    function getJdInfo() {
        b.nfc_product.name = $(".sku-name").html();
        if (!b.nfc_product.name || 1 > b.nfc_product.name.length) b.nfc_product.name = $("h1").text();
        var a = /\/(\d+).html/i;
        if (a = a.exec(window.location.href)) b.nfc_product.itemId = a[1];
        var c = $("#jd-price").text(),
            a = /[\d.]+/i;
        if (a = a.exec(c)) b.nfc_product.price = parseFloat(a[0]);
        if (0 >= b.nfc_product.price || isNaN(b.nfc_product.price)) b.nfc_product.price = parseFloat($(".summary-price-wrap .price").text());
        (0 >= b.nfc_product.price || isNaN(b.nfc_product.price)) && $(".p-price").each(function() {
            price = parseFloat($(this).text());
            if (0 == b.nfc_product.price || b.nfc_product.price > price && 0 < price) b.nfc_product.price = price
        });
        return !0
    }
    //当当网信息解析
    function getDangdangInfo() {
        var a, c = $("h1").html();
        void 0 === c && (c = "");
        0 <= c.indexOf("<span") ? b.nfc_product.name = c.replace(/<span.*?<\/span>/g, "") : 0 <= c.indexOf("<img") ? b.nfc_product.name = c.replace(/<img[\s\S]*?">/g, "") : b.nfc_product.name = c;
        c = window.location.href;
        a = /\/(\d+).html/i;
        var d = a.exec(c);
        d && (b.nfc_product.itemId = d[1]);
        var e = $("#salePriceTag").text();
        e || (e = $("#promo_price").text());
        e || (e = $("#d_price").text());
        a = /[\d.]+/i;
        if (d = a.exec(e)) b.nfc_product.price = parseFloat(d[0]);
        b.nfc_product.price || $(".price_d").each(function() {
            e = $(this).text();
            if (d = a.exec(e))
                if (price = parseFloat(d[0]), 0 == b.nfc_product.price || b.nfc_product.price > price && 0 < price) b.nfc_product.price = price
        });
        return !0
    }
    //对于淘宝网评论提前获取后进行的解析存储
    function C(a) {
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
                b.nfc_product.defaultComments.push({
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
    //对于天猫评论提前获取后进行的解析存储
    function K(a) {
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
                b.nfc_product.defaultComments.push({
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
    //对于京东商城评论提前获取后进行的解析存储
    function L(a) {
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
                b.nfc_product.defaultComments.push({
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
    
    //对于当当网评论提前获取后进行的解析存储
    function N(a) {
        var c, d, e, l, n, h, k, f;
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
            c = g[5] ? b.nfc_status.extension.baseURL + "images/dangdang_v" + parseInt(g[5]) + ".gif" : b.nfc_status.extension.baseURL + "images/dangdang_v0.gif";
            a = g[4];
            e = g[1].replace(/<[^>]+>/g, "");
            var u = g[3].replace(/<[^>]+>/g, ""),
                p = /\d+-\d+-\d+ \d+:\d+:\d+/.exec(u);
            p && (l = p[0], d = u.replace(l, ""), d = d.replace("已购", ""));
            if (g[2])
                for (regImg = /src="([^"]+)".*?big="([^"]+)"/g, num = 0; null !== (images = regImg.exec(g[2]));) h[num] = images[1], n[num] = images[2], num++;
            b.nfc_product.defaultComments.push({
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
    //对于国美评论提前获取后进行的解析存储
    function O(a) {
        var c, d, e, l, n, h, k, f, q;
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
                b.nfc_product.defaultComments.push({
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
    //对于苏宁评论提前获取后进行的解析存储
    function P(a) {
        var c, d, e, l, n, h, k;
        b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
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
                b.nfc_product.defaultComments.push({
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
    //提前获取各大网站评论数据
    function advance() {
        /*if (!b.nfc_config.settings.commentWords || void 0 === b.nfc_config.settings.commentWords.neg) return !0;*/
        switch (b.nfc_product.websiteId) {
            case 1:
                b.nfc_configModule.preGetCommentData_taobao(1);
                break;
            case 2:
                b.nfc_configModule.getCommentData_tmall(1);
                break;
            case 3:
                b.nfc_configModule.getCommentData_jd(1);
                break;
            case 4:
                b.nfc_configModule.getCommentData_dangdang(1);
                break;
            case 5:
                b.nfc_configModule.getCommentData_amazon(1);
                break;
            case 6:
                b.nfc_configModule.getCommentData_guomei(1);
                break;
            case 7:
                b.nfc_configModule.getCommentData_suning(1);
                break;
            default:
                return !1
        }
        return !0
    }
    //载入评论分析结果
    function loadAnalyResult() {
        //var a = b.nfc_configModule.getSearchClass(b.nfc_product.name);
        b.nfc_product.classId = 1;
        b.nfc_configModule.isPreRead();
        switch (b.nfc_product.websiteId) {
            case 1:
                find_add_in_taobao();
                break;
            case 2:
                find_add_in_tmall();
                break;
            case 3:
                find_add_in_jd();
                break;
            case 4:
                find_add_in_dangdang();
                break;
            case 6:
                find_add_in_guomei();
                break;
            case 7:
                find_add_in_suning()
        }
        if (b.nfc_status.extension.preRead) advance();
        else if (0 == b.nfc_product.sincereComments.length + b.nfc_product.sosoComments.length + b.nfc_product.badComments.length)
            for (var c = 1; 3 >= c; c++) {
                switch (c) {
                    case 1:
                        areaName = "sincere";
                        commentName = "可信评论";
                        break;
                    case 2:
                        areaName = "soso";
                        commentName = "可疑评论";
                        break;
                    case 3:
                        areaName = "bad";
                        commentName = "假的评论";
                        break;
                }
                $("#nfc_" + areaName + "Com").html("");
                $("#nfc_" + areaName + "Com").append($("<p>", {
                    text: "暂时没有找到" + commentName + "。"
                })).append($("<p>", {
                    text: "说明：" + b.nfc_product.websiteName + "的预读评论功能尚未开启，如需开启请"
                }).append($("<a>", {
                    href: b.nfc_status.extension.baseURL + "options.html#commentPreRead",
                    target: "_blank",
                    text: "点击这里。"
                })))
            }
        if (2 < b.nfc_product.websiteId) return b.thisExplorer.runtime.sendMessage({
            checkFakeReviews: b.nfc_config.settings.fakeCheckUrl,
            source: b.nfc_product.websiteId,
            itemId: b.nfc_product.itemId,
            productId: b.nfc_product.productId
        }, function(b) {
            0 >= b.result.length || (b = JSON.parse(b.result), 0 < b.fake && A(b))
        }), !0;
    }
    //根据分析结果选择要显示的句子
    function v(a) {
        var c = {
            resultType: "",
            resultRemark: "",
            icon:""
        };
        switch (a.result) {
            case 0:
                c.resultType = "nfc_badComment";
                c.resultRemark = "这个极有可能是虚假评论,要小心了";
                c.icon = b.thisExplorer.extension.getURL("../img/angry.png");
                break;
            case 1:
                c.resultType = "nfc_doubt";
                c.resultRemark = "是真是假不好判断呀,看你了！";
                c.icon = b.thisExplorer.extension.getURL("../img/question.png");
                break;
            case 2:
                c.resultType = "nfc_GoodComment";
                c.resultRemark = "这条评论应该没什么问题，信它啦!";
                c.icon = b.thisExplorer.extension.getURL("../img/smile.png");
                break;
            case 3:
                c.resultType = "nfc_ignoreComment";
                c.resultRemark = "评论太短，忽略";
                break;
            case 4:
                c.resultType = "nfc_repeatComment";
                c.resultRemark = "同一买家，短时间内又发起评论，极有可能刷单";
                c.icon = b.thisExplorer.extension.getURL("../img/angry.png");
        }
        return c
    }
    //找到淘宝商品评论区位置，分析评论注入评论分析结果
    function find_add_in_taobao() {
        var a = 0;
        (new Date).getFullYear();
        //找到评论区
        b.nfc_configModule.findCommentArea = function() {
            var b = $(".J_KgRate_Main").html();
            if (b && 0 <= b.indexOf("J_KgRate_ReviewItem") && 0 > b.indexOf("nfc-tm-comment")) return c(), a || ($(".kg-rate-wd-filter-bar").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 4000)
            }), a = 1), $(".kg-pagination2 li").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 4000)
            }), $(".tb-r-ubox a").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 4000)
            }), !0;
            setTimeout(nfc_configModule.findCommentArea, 4000)
        };
        var c = function() {
            b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
            var old = b.nfc_product.defaultComments.length;
            console.log(old);
            //对于评论区里的每一个评论，拆分出来他的具体信息，并存储
            $("li.J_KgRate_ReviewItem").each(function() {
                content = $(this).html();
                content = content.replace(/>\s+</g, "><");
                var a = d(content);
                if(0 < a.nick.length){
                    var key  = a.nick;
                    var indexKey = a.firstCmtDate + a.nick + a.auctionSku + a.firstComment.slice(0, 3);
                    if(void 0 === b.nfc_product.historyMem[key]){
                        //console.log(b.nfc_product.historyMem[key]);
                       b.nfc_product.historyMem[key] = {};
                       b.nfc_product.historyMem[key].date = a.firstCmtDate;
                       0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.auctionSku + a.firstComment.slice(0, 3), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                            nick: a.nick,
                            displayRatePic: a.displayRatePic,
                            auctionSku: a.auctionSku,
                            firstComment: a.firstComment,
                            haveappend:a.haveappend,
                            havePic:a.havePic,
                            appendComment: a.appendComment,
                            reply: a.reply,
                            firstCmtDate: a.firstCmtDate,
                            appendDays: a.appendDays,
                            rate:a.rate,
                            firstPicNails: a.firstPicNails,
                            firstPics: a.firstPics,
                            appendPicNails: a.appendPicNails,
                            appendPics: a.appendPics
                        }))
                    }else if(!void 0 === b.nfc_product.defaultCommentsIndex[indexKey]){
                        var indexKey = a.firstCmtDate + a.nick + a.auctionSku + a.firstComment.slice(0, 3);
                        if(void 0 === b.nfc_product.defaultCommentsIndex[indexKey]){
                           if(b.nfc_configModule.dateDiff(a.firstCmtDate, b.nfc_product.historyMem[key].date)){
                                b.nfc_product.defaultCommentsIndex[indexKey] = {};
                                b.nfc_product.defaultCommentsIndex[indexKey].result = 4;
                            }  
                        }
                    }
                }
                
            });
    
            //0 == b.nfc_status.extension.preRead && (b.nfc_product.defaultCommentNum = 0);
            //分析评论
            b.nfc_product.defaultCommentNum = 0;
            console.log(b.nfc_product.defaultComments.length);
            var num  = $("#nfc_comments .nfc_numHint").text();
            console.log(num);
            //b.nfc_configModule.analyzeCommentData();
            if(old != b.nfc_product.defaultComments.length || 0 == num){
                if(b.nfc_configModule.analyzeComment()){
                //e();
                    if(b.nfc_configModule.handlePreResult()){
                        t();
                        console.log("finish t")
                        u();
                    }
                }
            }
            
            //拆分每一条评论的内容信息，包括评论者、评论时间等等
        }, d = function(b) {
                var a, c, d;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    haveappend:0,
                    havePic:0,
                    rate:1,
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
                 k = $(".J_KgRate_Filter li.is-current").attr("data-kg-rate-filter-val");
                 if(k == 0 || k == -1){
                    c.rate = 0;
                 }
                a = /class="avatar".*?<div>(.*?)<\/div>(<img.*?src="([^"]+)">)?.*?class="J_KgRate_ReviewContent.*?>([\s\S]*?)<div class=\"tb-rev-item-media\">(<ul class="kg-photo-viewer-thumb-bar.*?<\/ul>)?.*?class="tb-r-date">(.*?)<\/span>([\s\S]*?)<\/div>[\s\S]*?<\/div><\/div>(<div class="tb-rev-item tb-rev-item-append".*?\[\u8ffd\u52a0\u8bc4\u8bba\]<\/span>([\s\S]*?)<\/div>(<ul class="kg-photo-viewer-thumb-bar.*?<\/ul>)?.*?class="tb-r-date">(.*?)<\/span>)?/i;
                if (b = a.exec(b)) {
                    c.nick = b[1].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    c.displayRatePic = b[3];
                    c.firstComment = b[4].replace(/<[^>]+>/g, "").trim();
                    if (b[5]){
                        c.havePic = 1;
                        for (d = /src="([^"]+)"/g, a = 0; null !== (images = d.exec(b[5]));) c.firstPicNails[a] = images[1], c.firstPics[a] = images[1].replace(/40x40/, "400x400"), a++;
                    }
                    c.firstCmtDate = b[6];
                    c.auctionSku = b[7].replace(/<[^>]+>/g, "").trim();
                    if (b[8]) {
                        c.haveappend = 1;
                        c.appendComment = b[9].trim();
                        if (b[10])
                            for (d = /src="([^"]+)"/g, a = 0; null !== (images = d.exec(b[10]));) c.appendPicNails[a] = images[1], c.appendPics[a] = images[1].replace(/40x40/, "400x400"), a++;
                        a = /\d+/;
                        if (b = a.exec(b[11])) c.appendDays = b[0]
                    }
                }
                return c;
                //向每一条评论下面添加分析结果
            }, e = function() {
                var a, c, e;
                    //k = $(".J_KgRate_Filter li.is-current").attr("data-kg-rate-filter-val");
                $(".tb-revbd li.J_KgRate_ReviewItem").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var f = d(content);
                     0 < f.nick.length && (indexKey = f.firstCmtDate + f.nick + f.auctionSku + f.firstComment.slice(0, 3), b.nfc_product.defaultCommentsIndex[indexKey] && (f = v(b.nfc_product.defaultCommentsIndex[indexKey]), a = f.resultType, c = f.resultRemark, e = f.icon,$(this).find(".review-details").append($("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "虚假性分析结果：" + c
                    }))), $("." + a).css("background-image", "url(" + e + ")")))
                })
            };
        b.nfc_configModule.findCommentArea();
        $("#J_TabBar li").click(function() {
            b.nfc_configModule.findCommentArea()
        });
        $("#reviews").delegate("li", "click", function() {
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        });
        $("#showTime").click(function(){
            var b = $(".J_KgRate_Main").html();
            if(b && 0 <= b.indexOf("J_KgRate_ReviewItem")){
                e();
            }else{
                alert("请先开启商品评论区")
            }
            
        });
    }
    //天猫
    function find_add_in_tmall() {
        var a = 0,
            c = (new Date).getFullYear();
        b.nfc_configModule.findCommentArea = function() {
            var b = $(".rate-grid").html();
            if (b && 0 <= b.indexOf("tm-col-master") && 0 <= b.indexOf("<tr>") && 0 > b.indexOf("nfc-tm-comment")) return d(), a || ($(".rate-toolbar").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), a = 1), $(".rate-paginator a").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".rate-tag-inner a").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".rate-tag-toggle").click(function() {
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), !0;
            setTimeout(nfc_configModule.findCommentArea, 500)
        };
        var d = function() {
            $(".rate-grid tr").each(function() {
                content = $(this).html();
                var a = e(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate.slice(0, 10) + a.nick + a.auctionSku + a.firstComment.slice(0, 3), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    haveappend:a.haveappend,
                    havePic:a.havePic,
                    appendComment: a.appendComment,
                    reply: a.reply,
                    firstCmtDate: a.firstCmtDate,
                    appendDays: a.appendDays,
                    firstPicNails: a.firstPicNails,
                    firstPics: a.firstPics,
                    rate:a.rate,
                    appendPicNails: a.appendPicNails,
                    appendPics: a.appendPics
                }))
            });
           /* 0 == b.nfc_status.extension.preRead && (b.nfc_product.defaultCommentNum = 0);
            b.nfc_configModule.analyzeCommentData();
            l();
            t();
            u();*/
            b.nfc_product.defaultCommentNum = 0;
            //b.nfc_configModule.analyzeCommentData();
            if(b.nfc_configModule.analyzeComment()){
                l();
                if(b.nfc_configModule.handlePreResult()){
                    t();
                    console.log("finish t")
                    u();
                }
            }
        }, e = function(b) {
                var a, d, e;
                e = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    haveappend:0,
                    havePic:0,
                    rate:1,
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
                    if (0 <= d[8].indexOf("收货当天追加：")) {e.appendDays = 0; e.haveappend=1;}
                    else if (a = /\d+/, a = a.exec(d[8])) {e.appendDays = a[0];e.haveappend=1;}
                    e.appendComment = d[9].replace(/<[^>]+>/g, "");
                    for (a = 0; null !== (images = b.exec(d[10]));) e.appendPicNails[a] = images[2], e.appendPics[a] = images[1], a++;
                    if(e.firstPics.length > 0){e.havePic = 1;}
                    e.auctionSku = d[11];
                    e.nick = d[12].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    e.displayRatePic = d[14]
                } else if (a = /class="tm-rate-fulltxt">(.*?)<\/div>(<div class="tm-m-photos"><ul class="tm-m-photos-thumb">[\s\S]*?<\/ul>)?.*?class="tm-rate-date">((\d{4}).)?((\d+).(\d+)|\u4eca\u5929)<\/div>.*?class="rate-sku"><p title="(.*?)">.*?class="rate-user-info">(.*?)<\/div>(<div class="rate-user-grade">[\s\S]*?src="([^"]+)")?/i, d = a.exec(b)) {
                    e.firstComment = d[1].replace(/<[^>]+>/g, "");
                    b = /data-src="([^"]+)".*?src="([^"]+)"/g;
                    for (a = 0; null !== (images = b.exec(d[2]));) e.firstPicNails[a] = images[2], e.firstPics[a] = images[1], a++;
                    "今天" == d[5] ? e.firstCmtDate = (new Date).format("yyyy-MM-dd") : (b = d[6], a = d[7], e.firstCmtDate = d[4] ? d[4] + "-" + b + "-" + a : c + "-" + b + "-" + a);
                    if(e.firstPics.length > 0){e.havePic = 1;}
                    e.auctionSku = d[8];
                    e.nick = d[9].replace(/(<[^>]+>|\uff08\u533f\u540d\uff09)/g, "");
                    e.displayRatePic = d[11]
                }
                return e
            }, l = function() {
                var a, c, d = b.thisExplorer.extension.getURL("../img/imageSprite.png");
                $(".rate-grid tr").each(function() {
                    content = $(this).html();
                    if (0 <= content.indexOf("nfc")) return !0;
                    var l = e(content);
                    0 < l.nick.length && (indexKey = l.firstCmtDate.slice(0, 10) + l.nick + l.auctionSku + l.firstComment.slice(0, 3), b.nfc_product.defaultCommentsIndex[indexKey] && (l = v(b.nfc_product.defaultCommentsIndex[indexKey]), a = l.resultType, c = l.resultRemark, $(this).find(".tm-col-master").append($("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "系统分析结果：" + c
                    }))), $(".nfc_img").css("background-image", "url(" + d + ")")))
                })
            };
        b.nfc_configModule.findCommentArea();
        $("#J_TabBarBox").click(function() {
            b.nfc_configModule.findCommentArea();
            $("#J_TabBarBox").unbind("click")
        });
        $("#J_Reviews").delegate("a", "click", function() {
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        })
    }
    //京东
    function find_add_in_jd() {
        var a = 0;
        (new Date).getFullYear();
        b.nfc_product.repeatCounter = 0;
        b.nfc_configModule.findCommentArea = function() {
            var d = 1,
                d = $("#comment").html(),
                e = $("#comments-list").html();
            if (d && 0 <= d.indexOf("comments-item") || e && 0 <= e.indexOf("comments-item") || d && 0 <= d.indexOf("comment-item") || e && 0 <= e.indexOf("comment-item")) return d = d && 0 <= d.indexOf("comments-item") || e && 0 <= e.indexOf("comments-item") ? 1 : 2, c(d), a || ($(".tab-main li").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".m-tab-trigger li").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), a = 1), $(".ui-page a").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), !0;
            b.nfc_product.repeatCounter++;
            600 > b.nfc_product.repeatCounter && setTimeout(nfc_configModule.findCommentArea, 1E3)
        };
        var c = function(a) {
            b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
            1 == a ? $(".comments-item").each(function() {
                content = $(this).html();
                content = content.replace(/>\s+</g, "><");
                var c = d(content, a);
                0 < c.nick.length && (indexKey = c.firstCmtDate.slice(0, 10) + c.nick + c.firstComment.slice(0, 6), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                    nick: c.nick,
                    displayRatePic: c.displayRatePic,
                    auctionSku: c.auctionSku,
                    firstComment: c.firstComment,
                    appendComment: c.appendComment,
                    reply: c.reply,
                    haveappend:c.haveappend,
                    havePic:c.havePic,
                    rate:c.rate,
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
                0 < c.nick.length && (indexKey = c.firstCmtDate.slice(0, 10) + c.nick + c.firstComment.slice(0, 6), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                    nick: c.nick,
                    displayRatePic: c.displayRatePic,
                    auctionSku: c.auctionSku,
                    firstComment: c.firstComment,
                    haveappend:c.haveappend,
                    havePic:c.havePic,
                    rate:c.rate,
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
            b.nfc_product.defaultCommentNum = 0;
            //b.nfc_configModule.analyzeCommentData();
            if(b.nfc_configModule.analyzeComment()){
                e();
                if(b.nfc_configModule.handlePreResult()){
                    t();
                    console.log("finish t")
                    u();
                }
            }
        }, d = function(b, a) {
                var c, d, e, q;
                d = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    havePic:0,
                    appendComment: "",
                    reply: "",
                    firstCmtDate: "",
                    haveappend:0,
                    appendDays: 0,
                    firstPics: [],
                    firstPicNails: [],
                    appendPics: [],
                    rate:1,
                    appendPicNails: [],
                    result: 0,
                    remark: "",
                    keyword: ""
                };
                //current属性决定现在是否是好评
                if (c = (1 == a ? /class="comment-time type-item">(.*?)<\/div>.*?class="p-comment">(.*?)<\/div>.*?<\/ul><\/div>(<div class="J-p-show-img.*?div class="J-big-photo p-photos hide"><\/div>)?.*?<div class="user-item.*?src="([^"]+)".*?class="user-name">(.*?)<\/div>/i : /class="user-info".*?src="([^"]+)".*?alt="([^"]+)".*?"comment-con">(.*?)<\/p>(<div class="pic-list.*?<\/div>)?.*?<div class=\"order-info\">(.*?)<\/div>.*?<\/div><\/div>(<div class=\"append-comment.*?\u8d2d\u4e70(\d+|\u5f53)\u5929.*?<p class=\"comment-con\">(.*?)<\/p>(<div class=\"pic-list.*?<\/div>)?)?/i).exec(b))
                    if (1 == a) {
                        k = $(".current").html();
                        if(0 <= k.indexOf("中评") || 0 <= k.indexOf("差评")){
                            d.rate = 0;
                        }
                        d.firstCmtDate = c[1];
                        d.firstComment = c[2];
                        if (c[3]){
                            d.havePic = 1;
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[3]));) d.firstPicNails[e] = images[1], d.firstPics[e] = images[1].replace(/76x76/, "616x405"), e++;
                        }
                        d.displayRatePic = c[4];
                        d.nick = c[5]
                    } else {
                        k = $(".current").html();
                        if(0 <= k.indexOf("中评") || 0 <= k.indexOf("差评")){
                            d.rate = 0;
                        }
                        d.displayRatePic = c[1];
                        d.nick = c[2];
                        d.firstComment = c[3];
                        if (c[4]){
                            d.havePic = 1;
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[4]));) d.firstPicNails[e] = images[1], d.firstPics[e] = images[1].replace(/48x48/, "616x405"), e++;
                        }
                        e = c[5].replace(/<[^>]+>/g, " ");
                        if (q = /\d+-\d+-\d+ \d+:\d+/.exec(e)) d.firstCmtDate = q[0], d.auctionSku = e.replace(d.firstCmtDate, "");
                        if (c[6] && (d.haveappend = 1, d.appendDays = "当" == c[7] ? 0 : c[7], d.appendComment = c[8], c[9]))
                            for (q = /src="([^"]+)"/g, e = 0; null !== (images = q.exec(c[9]));) d.appendPicNails[e] = images[1], d.appendPics[e] = images[1].replace(/48x48/, "616x405"), e++
                    }
                return d
            }, e = function(a) {
                function c(a, d) {
                    var e = null,
                        l;
                    b.nfc_product.defaultCommentsIndex[d] && ( 
                        l = v(b.nfc_product.defaultCommentsIndex[d]), e = l.resultType, l = l.resultRemark, e = $("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + e
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "系统分析结果：" + l
                    })));
                    return e
                }
                var e = "",
                    k = b.thisExplorer.extension.getURL("../img/imageSprite.png"),
                    f = $("#comment .tab-main li.current").attr("clstag");
                void 0 === f && (f = $("#comments-list .m-tab-trigger li.curr").attr("clstag"));
                1 == a ? $(".comments-item").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var b = d(content, a);
                    0 < b.nick.length && (indexKey = b.firstCmtDate.slice(0, 10) + b.nick + b.firstComment.slice(0, 6), e = c(f, indexKey)) && ($(this).find(".column2").append(e), $(".nfc_img").css("background-image", "url(" + k + ")"))
                }) : $(".comment-item").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s+</g, "><");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var b = d(content, a);
                    0 < b.nick.length && (indexKey = b.firstCmtDate.slice(0, 10) + b.nick + b.firstComment.slice(0, 6), e = c(f, indexKey)) && ($(this).find(".comment-column").append(e), $(".nfc_img").css("background-image", "url(" + k + ")"))
                })
            };
        b.nfc_configModule.findCommentArea();
        $(".tab-main li").click(function() {
            b.nfc_product.repeatCounter = 0;
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        });
        $(".ui-page a").click(function() {
            b.nfc_product.repeatCounter = 0;
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        });
        $("#comment").delegate("a", "click", function() {
            b.nfc_product.repeatCounter = 0;
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        })
    }
    //当当网
    function find_add_in_dangdang() {
        b.nfc_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.nfc_configModule.findCommentArea = function() {
            var c = $("#comment_all").html();
            if (c && 0 <= c.indexOf("comment_items") && 0 <= c.indexOf("comment_tabs") && 0 > c.indexOf("nfc")) return a(), $(".paginating li").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".fanye a").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".comment_sort").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), !0;
            b.nfc_product.repeatCounter++;
            600 > b.nfc_product.repeatCounter && setTimeout(nfc_configModule.findCommentArea, 500)
        };
        var a = function() {
            b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
            $(".comment_items").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    haveappend:0,
                    havePic:a.havePic,
                    rate:a.rate,
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
            b.nfc_product.defaultCommentNum = 0;
            //b.nfc_configModule.analyzeCommentData();
            if(b.nfc_configModule.analyzeComment()){
                d();
                if(b.nfc_configModule.handlePreResult()){
                    t();
                    console.log("finish t")
                    u();
                }
            }
        }, c = function(a) {
                var c, d, h;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    firstComment: "",
                    appendComment: "",
                    haveappend:0,
                    havePic:0,
                    rate:1,
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
                    k = $(".on").html();
                    if(0 <= k.indexOf("中评") || 0 <= k.indexOf("差评")){
                        c.rate = 0;
                    }
                    c.displayRatePic = a[5] ? b.nfc_status.extension.baseURL + "images/dangdang_v" + parseInt(a[5]) + ".gif" : b.nfc_status.extension.baseURL + "images/dangdang_v0.gif";
                    c.nick = a[4];
                    c.firstComment = a[1].replace(/<[^>]+>/g, "");
                    d = a[3].replace(/<[^>]+>/g, "");
                    if (h = /\d+-\d+-\d+ \d+:\d+:\d+/.exec(d)) c.firstCmtDate = h[0], c.auctionSku = d.replace(c.firstCmtDate, ""), c.auctionSku = c.auctionSku.replace("已购", "");
                    if (a[2]){
                        for (h = /src="([^"]+)".*?big="([^"]+)"/g, d = 0; null !== (images = h.exec(a[2]));) c.firstPicNails[d] = images[1], c.firstPics[d] = images[2], d++;
                        c.havePic = 1;
                    }
                }
                return c
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../img/imageSprite.png"),
                    h = $(".comment_tabs span.on").attr("dd_name");
                $(".comment_items").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.nfc_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("中评") ? (a = "nfc_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("差评") ? (a = "nfc_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.nfc_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".items_right").append($("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "系统分析结果：" + d
                    }))), $(".nfc_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.nfc_configModule.findCommentArea();
        $("#comment_tab").click(function() {
            b.nfc_configModule.findCommentArea()
        });
        $("#comment_all").delegate("a", "click", function() {
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        });
        $("#comment_num_tab").delegate("span", "click", function() {
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        })
    }
    //国美
    function find_add_in_guomei() {
        b.nfc_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.nfc_configModule.findCommentArea = function() {
            var c = $("#j-comment-section").html();
            if (c && 0 <= c.indexOf("replyListWrap") && 0 <= c.indexOf("appraiseType") && 0 <= c.indexOf("j-page") && 0 > c.indexOf("nfc")) return a(), $(".appraiseType").delegate("label", "click", function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 3000)
            }), $("#j-page").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 3000)
            }), !0;
            b.nfc_product.repeatCounter++;
            600 > b.nfc_product.repeatCounter && setTimeout(nfc_configModule.findCommentArea, 3000)
        };
        var a = function() {
            b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
            $(".replyListWrap li.oh").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
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
                    appendPics: a.appendPics,
                    haveappend: a.haveappend,
                    rate: a.rate,
                    havePic: a.havePic
                }));
            });
           b.nfc_product.defaultCommentNum = 0;
            //b.nfc_configModule.analyzeCommentData();
            if(b.nfc_configModule.analyzeComment()){
                d();
                if(b.nfc_configModule.handlePreResult()){
                    t();
                    console.log("finish t")
                    u();
                }
            }
        }, c = function(a) {
                var c;
                c = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    haveappend: 0,
                    havePic: 0,
                    rate: 1,
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
                if (a = /class="bgiprd">.*?(\d+-\d+-\d+ \d+:\d+).*?<\/a><\/p>(<p>.*?<\/p>)?.*?class="shiyongxinde oh">([\s\S]*?)<\/div>.*?<div class="reply-center-inner">(<div class="shiyongxinde oh">(.*?)<span class="fr">(.*?)<\/span><\/div>)?<\/div>.*?class="reply_avatar".*?src="([^"]+)".*?class="reply_avatar_userName">(.*?)<\/span>/i.exec(a)) {
                    k = $(".active").html();
                    if(0 <= k.indexOf("中评") || 0 <= k.indexOf("差评")){
                            c.rate = 0;
                    }
                    c.firstCmtDate = a[1];
                    if(a[2]){
                        c.auctionSku = a[2].replace(/<[^>]+>/g, ""); 
                    } 
                    c.firstComment = a[3].replace(/<[^>]+>|\u4f7f\u7528\u5fc3\u5f97\uff1a/g, "");
                    if(a[5]){
                        c.haveappend = 1;
                        c.appendComment = a[5].replace(/<[^>]+>/g, "");
                        if(a[6]){
                           c.appendDays = b.nfc_configModule.dateDiff(a[6], a[1]); 
                        }
                    }
                    c.displayRatePic = a[7];
                    c.nick = 0 < a[8].length ? a[8] : "无昵称用户";
                }
                return c
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../img/imageSprite.png"),
                    h = $(":radio:checked").attr("appraisetypetype");
                $(".replyListWrap li.oh").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.nfc_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("mid") ? (a = "nfc_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("bad") ? (a = "nfc_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.nfc_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".reply-center").append($("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "系统分析结果：" + d
                    }))), $(".nfc_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.nfc_configModule.findCommentArea();
        $(".pingjia_header").click(function() {
            b.nfc_configModule.findCommentArea()
        });
        $(".appraiseType").delegate("label", "click", function() {
            setTimeout(nfc_configModule.findCommentArea, 3000)
        });
        $("#j-page").click(function() {
            setTimeout(nfc_configModule.findCommentArea, 3000)
        })
    }
    //苏宁
    function find_add_in_suning() {
        b.nfc_product.repeatCounter = 0;
        (new Date).getFullYear();
        b.nfc_configModule.findCommentArea = function() {
            var c = $("#appraise").html();
            if (c && 0 <= c.indexOf("rv-target-list") && 0 > c.indexOf("{{ commodityReviewId }}") && 0 <= c.indexOf("rv-main-item") && 0 <= c.indexOf("ui-page") && 0 <= c.indexOf("rv-main-filter") && 0 > c.indexOf("nfc")) return a(), $(".rv-main-item").delegate("li", "click", function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".ui-page").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 1E3)
            }), $(".rv-filter-sort").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 2E3)
            }), $("#rv-funny-mode-checkbox").change(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 2E3)
            }), $(".rv-rate-item a").click(function() {
                b.nfc_product.repeatCounter = 0;
                setTimeout(nfc_configModule.findCommentArea, 2E3)
            }), !0;
            b.nfc_product.repeatCounter++;
            30 > b.nfc_product.repeatCounter && setTimeout(nfc_configModule.findCommentArea, 2E3)
        };
        var a = function() {
            b.nfc_product.defaultComments || (b.nfc_product.defaultComments = []);
            $(".rv-target-list").each(function() {
                content = $(this).html();
                content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                var a = c(content);
                0 < a.nick.length && (indexKey = a.firstCmtDate + a.nick + a.firstComment.slice(0, 3), void 0 === b.nfc_product.defaultCommentsIndex[indexKey] && b.nfc_product.defaultComments.push({
                    nick: a.nick,
                    displayRatePic: a.displayRatePic,
                    auctionSku: a.auctionSku,
                    firstComment: a.firstComment,
                    haveappend:a.haveappend,
                    havePic:a.havePic,
                    rate:a.rate,
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
            b.nfc_product.defaultCommentNum = 0;
            //b.nfc_configModule.analyzeCommentData();
            if(b.nfc_configModule.analyzeComment()){
                d();
                if(b.nfc_configModule.handlePreResult()){
                    t();
                    console.log("finish t")
                    u();
                }
            }
        }, c = function(a) {
                var b, c, d;
                b = {
                    nick: "",
                    displayRatePic: "",
                    auctionSku: "",
                    grade: 0,
                    haveappend:0,
                    havePic:0,
                    rate:1,
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
                     k = $(".now").html();
                    if(0 <= k.indexOf("中评") || 0 <= k.indexOf("差评")){
                            b.rate = 0;
                    }
                    b.nick = a[1].replace(/<[^>]+>/g, "");
                    b.firstComment = a[2].replace(/<[^>]+>/g, "");
                    if (a[3]){
                        b.havePic = 1;
                        for (d = /src="([^"]+)"/g, c = 0; null !== (images = d.exec(a[3]));) - 1 < images[1].indexOf("400x400") || (b.firstPicNails[c] = images[1], b.firstPics[c] = images[1].replace(/100x100/, "400x400"), c++);
                    }
                    if (a[4] && (b.appendDays = "当天追加" == a[5] ? 0 : a[6], b.appendComment = a[7].replace(/<[^>]+>/g, ""), a[8])){
                        b.haveappend=1;
                        for (d = /src="([^"]+)"/g, c = 0; null !== (images = d.exec(a[8]));) - 1 < images[1].indexOf("400x400") || (b.appendPicNails[c] = images[1], b.appendPics[c] = images[1].replace(/100x100/, "400x400"), c++);
                    }
                    b.firstCmtDate = a[9]
                }
                return b
            }, d = function() {
                var a, d, n = b.thisExplorer.extension.getURL("../img/imageSprite.png"),
                    h = $(".rv-main-wrap li.now").attr("data-type");
                $(".rv-target-list").each(function() {
                    content = $(this).html();
                    content = content.replace(/>\s*(\S.*?\S?)?\s*</g, ">$1<");
                    if (0 <= content.indexOf("nfc")) return !0;
                    var k = c(content);
                    0 < k.nick.length && (indexKey = k.firstCmtDate + k.nick + k.firstComment.slice(0, 3), b.nfc_product.defaultCommentsIndex[indexKey] && (0 <= h.indexOf("normal") ? (a = "nfc_youyouagree", d = "中评通常都是真的，但是如果中评不反映商品或商家的问题，则有可能是假的。") : 0 <= h.indexOf("bad") ? (a = "nfc_youyouagree", d = "差评通常都是真的，不过有时候可能会有点偏激。如果只是因为小问题就给差评，这个差评也可能是假的，这样做是为了强调核心卖点。") : (k = v(b.nfc_product.defaultCommentsIndex[indexKey]), a = k.resultType, d = k.resultRemark), $(this).find(".topic-main").append($("<div>", {
                        "class": "nfc-tm-comment"
                    }).append($("<i>", {
                        "class": "nfc_img " + a
                    })).append($("<span>", {
                        style: "margin-left:6px;",
                        text: "系统分析结果：" + d
                    }))), $(".nfc_img").css("background-image", "url(" + n + ")")))
                })
            };
        b.nfc_configModule.findCommentArea();
        $("#productCommTitle").click(function() {
            b.nfc_product.repeatCounter = 0;
            b.nfc_configModule.findCommentArea()
        });
        $("#appraise").delegate("li", "click", function() {
            b.nfc_product.repeatCounter = 0;
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        });
        $("#appraise").delegate("a", "click", function() {
            b.nfc_product.repeatCounter = 0;
            setTimeout(nfc_configModule.findCommentArea, 1E3)
        })
    }
    //亚马逊，情况特殊，提前获取的评论进行的分析
    function Z(a) {
        for (var c, d, e, l, n, h, k, f = /class=\"a-section review\"[\s\S]*?class=\"a-icon-alt\">([\d.]+) \u9897\u661f[\s\S]*?\u7559\u8a00\u8005[\s\S]*?author\"[\s\S]*?\">([\s\S]*?)<\/a>[\s\S]*?review-date\">\u4e8e ([\s\S]*?)<\/span>[\s\S]*?review-text\">([\s\S]*?)<\/span>/ig, q = 0; null !== (d = f.exec(a));) q++, l = [], n = [], h = [], k = [], c = d[2], e = d[3], d = d[4], b.nfc_product.defaultComments.push({
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
    b.nfc_configModule.preGetCommentData_taobao = function(a){
        console.log(b.nfc_product.itemId +" "+ b.nfc_product.sellerId)
        var port = b.thisExplorer.runtime.connect({name:"knock"});
        port.postMessage({
            websiteId: b.nfc_product.websiteId,
            itemId: b.nfc_product.itemId,
            sellerId: b.nfc_product.sellerId
        });
        port.onMessage.addListener(function(msg){
            console.log(msg.preReadResult.result);
            b.nfc_product.preResult = msg.preReadResult.result;
            if(b.nfc_product.preResult >= 60){
                $("#summary_result").html("可信度高");
            }else if(b.nfc_product.preResult <= 20){
                $("#summary_result").html("可信度差");
            }else{
                $("#summary_result").html("可信度中");
            }
        }); 
        return !0;
    };
    b.nfc_configModule.getCommentData_taobao = function(a) {
        var c;
        if (!b.nfc_product.itemId || !b.nfc_product.sellerId) return !1;
        console.log("https://rate.taobao.com/feedRateList.htm?auctionNumId=" + b.nfc_product.itemId + "&userNumId=" + b.nfc_product.sellerId + "&siteID=&currentPageNum=" + a + "&pageSize=20&rateType=&orderType=sort_weight&showContent=1&attribute=&folded=0&ua=");
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://rate.taobao.com/feedRateList.htm?auctionNumId=" + b.nfc_product.itemId + "&userNumId=" + b.nfc_product.sellerId + "&siteID=&currentPageNum=" + a + "&pageSize=20&rateType=&orderType=sort_weight&showContent=1&attribute=&folded=0&ua="
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = C(d), b.nfc_configModule.analyzeCommentData(), t(), 10 >= a && 50 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                nfc_configModule.getCommentData_taobao(++a)
            }, 3E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u(), c = C(d), b.nfc_configModule.analyzeCommentData(), t(), 10 >= a && 50 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                nfc_configModule.getCommentData_taobao(++a)
            }, 3E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_tmall = function(a) {
        var c;
        if (!b.nfc_product.itemId || !b.nfc_product.sellerId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://rate.tmall.com/list_detail_rate.htm?itemId=" + b.nfc_product.itemId + "&spuId=&sellerId=" + b.nfc_product.sellerId + "&order=3&currentPage=" + a + "&append=0&content=1&tagId=&posi=&picture=0&ua="
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = K(d), b.nfc_configModule.analyzeCommentData(), t(), 10 >= a && 50 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                nfc_configModule.getCommentData_tmall(++a)
            }, 3E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_jd = function(a) {
        var c;
        if (!b.nfc_product.itemId) return !1;
        a || (a = 1);
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "https://sclub.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98vv67768&productId="+b.nfc_product.itemId+"&score=0&sortType=5&page="+(a-1)+"&pageSize=10&isShadowSku=0&fold=1"
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = L(d), b.nfc_configModule.analyzeCommentData(), t(), 20 >= a && 50 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                nfc_configModule.getCommentData_jd(++a)
            }, 2E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_dangdang = function(a) {
        var c;
        if (!b.nfc_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "http://product.dangdang.com/index.php?r=comment%2Flist&productId=" + b.nfc_product.itemId + "&categoryPath=&mainProductId=" + b.nfc_product.itemId + "&mediumId=0&pageIndex=" + a + "&sortType=1&filterType=1&isSystem=1&tagId=0&tagFilterCount=0"
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = N(d), b.nfc_configModule.analyzeCommentData(), t(), 40 >= a && 50 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                b.nfc_configModule.getCommentData_dangdang(++a)
            }, 1E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_amazon = function(a) {
        var c;
        if (!b.nfc_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "//www.amazon.cn/product-reviews/" + b.nfc_product.itemId + "/ref=cm_cr_arp_d_paging_btm_next_2?showViewpoints=1&pageNumber=" + a
        }, function(d) {
            d = d.returnedData;
            0 < d.length && (c = Z(d), b.nfc_configModule.analyzeCommentData(), t(), 20 >= a && 100 > b.nfc_product.defaultCommentNum && 0 < c ? setTimeout(function() {
                nfc_configModule.getCommentData_amazon(++a)
            }, 1E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_guomei = function(a) {
        console.log(b.nfc_product.itemId);
        if (!b.nfc_product.itemId) return !1;
        b.thisExplorer.runtime.sendMessage({
            getData: 1,
            url: "//ss.gome.com.cn/item/v1/prdevajsonp/appraiseModuleAjax/" + b.nfc_product.itemId + "/" + a + "/validgood/flag/appraise/validgood"
        }, function(c) {
            c = c.returnedData;
            0 < c.length && (O(c), b.nfc_configModule.analyzeCommentData(), t(), 20 >= a && 100 > b.nfc_product.defaultCommentNum ? setTimeout(function() {
                nfc_configModule.getCommentData_guomei(++a)
            }, 1E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_configModule.getCommentData_suning = function(a) {
        if (!b.nfc_product.itemId) return !1;
        var c = document.createElement("script");
        c.textContent = 'var nfc_input = document.createElement("input");\nnfc_input.type = "hidden";\nnfc_input.id="nfc_input";\nnfc_input.value = JSON.stringify(sn);\n(document.head||document.documentElement).appendChild(nfc_input);';
        (document.head || document.documentElement).appendChild(c);
        c.parentNode.removeChild(c);
        var c = $("#nfc_input").val(),
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
            0 < c.length && (P(c), b.nfc_configModule.analyzeCommentData(), t(), 20 >= a && 100 > b.nfc_product.defaultCommentNum ? setTimeout(function() {
                nfc_configModule.getCommentData_suning(++a)
            }, 1E3) : (b.nfc_product.defaultCommentNum = 0, b.nfc_configModule.analyzeCommentData(), b.nfc_product.sincereCommentNum = 0, b.nfc_product.sosoCommentNum = 0, b.nfc_product.badCommentNum = 0, b.nfc_product.normalCommentNum = 0, b.nfc_product.doubtCommentNum = 0, t()), u())
        });
        return !0
    };
    b.nfc_product.checkTimes = 0;
    b.nfc_configModule.startFromHere = function(a) {
        getLocationInfo();
        if ("firefox" == b.nfc_config.settings.explorerType && 8 == b.nfc_product.websiteId) return !1;
        if (3 >= b.nfc_product.name.length || !b.nfc_product.price && 3 > b.nfc_product.websiteId) return 10 > a && setTimeout(function() {
            nfc_configModule.startFromHere(++a)
        }, 2E3), !1;
        loadLeft();
        b.nfc_configModule.loadConfig(loadAnalyResult);
       // b.nfc_configModule.checkUpdate()
    };
    b.nfc_configModule.startFromHere(1)
})(window);