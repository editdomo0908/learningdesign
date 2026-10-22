/*
 * Generated Storyline slide: Welcome.
 * File identifier: 6CoJj3uqkMn.js.
 * The data is expanded here so its fields can be read in an editor.
 * JSON.stringify preserves the string-based interface expected by the player.
 * Make lasting course-content changes in Storyline, then republish.
 */

window.globalProvideData(
  'slide',
  JSON.stringify({
    'title': 'Welcome',
    'trackViews': true,
    'showMenuResultIcon': false,
    'viewGroupId': '',
    'historyGroupId': '',
    'videoZoom': '',
    'scrolling': false,
    'transition': 'appear',
    'transDuration': 0,
    'transDir': 1,
    'wipeTrans': false,
    'slideLock': false,
    'navIndex': -1,
    'thumbnailid': '',
    'slideNumberInScene': 2,
    'includeInSlideCounts': true,
    'presenterRef': {
      'id': 'none',
    },
    'showAnimationId': '',
    'lmsId': 'Slide2',
    'width': 1000,
    'height': 562,
    // Resume prompt and saved-position behavior.
    'resume': false,
    'background': {
      'type': 'fill',
      'fill': {
        'type': 'linear',
        'rotation': 90,
        'colors': [
          {
            'kind': 'color',
            'rgb': '0xFFFFFF',
            'alpha': 100,
            'stop': 0,
          },
        ],
      },
    },
    'id': '6CoJj3uqkMn',
    // Actions and trigger groups.
    'actionGroups': {
      'ActGrpOnNextButtonClick': {
        'kind': 'actiongroup',
        'actions': [
          {
            'kind': 'gotoplay',
            'window': '_current',
            'wndtype': 'normal',
            'objRef': {
              'type': 'string',
              'value': '_player.6qDJpFGfLa2.5lf5DNczXQc',
            },
          },
        ],
      },
      'ActGrpOnPrevButtonClick': {
        'kind': 'actiongroup',
        'actions': [
          {
            'kind': 'history_prev',
          },
        ],
      },
      'NavigationRestrictionNextSlide_6CoJj3uqkMn': {
        'kind': 'actiongroup',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'ActGrpOnNextButtonClick',
          },
        ],
      },
      'NavigationRestrictionPreviousSlide_6CoJj3uqkMn': {
        'kind': 'actiongroup',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'ActGrpOnPrevButtonClick',
          },
        ],
      },
    },
    // Event handlers and triggers.
    'events': [
      {
        'kind': 'onslidestart',
        'actions': [
          {
            'kind': 'if_action',
            'condition': {
              'statement': {
                'kind': 'compare',
                'operator': 'eq',
                'valuea': '_playerVars.#hasPrevHistory',
                'typea': 'var',
                'valueb': false,
                'typeb': 'boolean',
              },
            },
            'thenActions': [
              {
                'kind': 'enable_window_control',
                'name': 'previous',
                'enable': false,
                'affectTabStop': true,
              },
            ],
          },
          {
            'kind': 'set_window_control_visible',
            'name': 'next',
            'visible': true,
          },
          {
            'kind': 'enable_window_control',
            'name': 'next',
            'enable': false,
            'affectTabStop': false,
          },
          {
            'kind': 'enable_window_control',
            'name': 'swiperight',
            'enable': false,
            'affectTabStop': false,
          },
        ],
      },
      {
        'kind': 'onbeforeslidein',
        'actions': [
          {
            'kind': 'if_action',
            'condition': {
              'statement': {
                'kind': 'compare',
                'operator': 'eq',
                'valuea': '$WindowId',
                'typea': 'property',
                'valueb': '_frame',
                'typeb': 'string',
              },
            },
            'thenActions': [
              {
                'kind': 'set_frame_layout',
                'name': 'pxabnsnfns00011100101',
              },
            ],
            'elseActions': [
              {
                'kind': 'set_window_control_layout',
                'name': 'pxabnsnfns00011100101',
              },
            ],
          },
        ],
      },
      {
        'kind': 'onnextslide',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'NavigationRestrictionNextSlide_6CoJj3uqkMn',
          },
        ],
      },
      {
        'kind': 'onprevslide',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'NavigationRestrictionPreviousSlide_6CoJj3uqkMn',
          },
        ],
      },
      {
        'kind': 'ontimelinecomplete',
        'actions': [
          {
            'kind': 'set_window_control_visible',
            'name': 'next',
            'visible': true,
          },
          {
            'kind': 'enable_window_control',
            'name': 'next',
            'enable': true,
            'affectTabStop': false,
          },
          {
            'kind': 'enable_window_control',
            'name': 'swiperight',
            'enable': true,
            'affectTabStop': false,
          },
        ],
      },
      {
        'kind': 'ontransitionin',
        'actions': [
          {
            'kind': 'adjustvar',
            'variable': '_player.LastSlideViewed_6DNPz0KiHAz',
            'operator': 'set',
            'value': {
              'type': 'string',
              'value': '_player.',
            },
          },
          {
            'kind': 'adjustvar',
            'variable': '_player.LastSlideViewed_6DNPz0KiHAz',
            'operator': 'add',
            'value': {
              'type': 'property',
              'value': '$AbsoluteId',
            },
          },
        ],
      },
    ],
    // Slide layers and their contents.
    'slideLayers': [
      {
        'enableSeek': true,
        'enableReplay': true,
        'timeline': {
          'duration': 6381,
          'events': [
            {
              'kind': 'ontimelinetick',
              'time': 0,
              'actions': [
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '6UivBu5BEWQ',
                  },
                },
              ],
            },
            {
              'kind': 'ontimelinetick',
              'time': 750,
              'actions': [
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '5XisRlgzgGn',
                  },
                },
              ],
            },
            {
              'kind': 'ontimelinetick',
              'time': 881,
              'actions': [
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '5g48uPtagut',
                  },
                },
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '6qdJhAWS3Ze',
                  },
                },
              ],
            },
          ],
        },
        'objects': [
          {
            'kind': 'vectorshape',
            'rotation': 0,
            'accType': 'button',
            'cliptobounds': false,
            'defaultAction': 'onrelease',
            'textLib': [
              {
                'kind': 'textdata',
                'uniqueId': '6eJnn2fYv1k_47842F9B',
                'id': '01',
                'linkId': 'txt__default_5g48uPtagut',
                'type': 'acctext',
                'xPos': 5,
                'yPos': 2,
                'xAccOffset': 5,
                'yAccOffset': 2,
                'width': 191,
                'height': 58,
                'valign': 'center',
                'wordwrap': true,
                'textshadow': false,
                'shadowIndex': -1,
                'scrollOverflow': false,
                'textLibItemId': '66r3yfiaI7X_6eJnn2fYv1k',
                'vartext': {
                  'blocks': [
                    {
                      'spans': [
                        {
                          'text': 'START COURSE',
                          'style': {
                            'fontFamily': '"Georgia Charset0_v2mMMb9D06365F","Georgia"',
                            'foregroundColor': '#FFFFFF',
                            'linkColor': '#FFFFFF',
                            'ascent': 15.269618034362793,
                            'descent': 3.6507232189178467,
                            'leading': 0,
                            'underlinePosition': -1.4716724157333374,
                            'underlineThickness': 0.8212094902992249,
                            'xHeight': 8.016956329345703,
                          },
                        },
                      ],
                      'style': {
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 12,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                  ],
                  'defaultBlockStyle': {
                    'flowDirection': 'leftToRight',
                    'leadingMargin': 0,
                    'trailingMargin': 0,
                    'firstLineMargin': 0,
                    'justification': 'center',
                    'defaultTabStop': 49.955555,
                    'listLevel': 0,
                    'lineSpacingRule': 'multiple',
                    'lineSpacing': 20,
                    'indentSize': 37.466667,
                    'spacingBefore': 0,
                    'spacingAfter': 0,
                    'baseSpanStyle': {
                      'fontFamily': 'Open Sans',
                      'fontSize': 12.488889,
                      'fontIsBold': false,
                      'fontIsItalic': false,
                      'fontIsUnderline': false,
                      'fontIsStrikeout': false,
                      'underlineStyle': 'normal',
                      'elevation': 'normal',
                      'spacing': 0,
                      'ignoreKerningTable': false,
                      'displayCase': 'asIs',
                      'languageId': 0,
                      'foregroundColor': '#FFFFFF',
                      'linkColor': '#0000FF',
                    },
                    'listStyle': {
                      'listType': 'none',
                      'listTypeFormat': 'plain',
                      'start': 0,
                      'size': 100,
                    },
                  },
                  'direction': 'horizontal',
                },
                'vectortext': {
                  'left': 0,
                  'top': 0,
                  'right': 163,
                  'bottom': 41,
                  'pngfb': false,
                  'pr': {
                    'l': 'Lib',
                    'i': 7,
                  },
                },
              },
            ],
            'shapemaskId': '',
            'xPos': 612,
            'yPos': 353,
            'tabIndex': 3,
            'tabEnabled': true,
            'referenceName': '5g48uPtagut',
            'morphReferenceName': '65GEpxZWa4f',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 100,
            'rotateYPos': 30.5,
            'scaleX': 100,
            'scaleY': 100,
            'alpha': 100,
            'depth': 1,
            'scrolling': true,
            'shuffleLock': false,
            'data': {
              'hotlinkId': '',
              'accState': 0,
              'vectorData': {
                'left': -1,
                'top': -1,
                'right': 203,
                'bottom': 64,
                'altText': 'START COURSE',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 5,
                },
              },
              'html5data': {
                'xPos': -1,
                'yPos': -1,
                'width': 204,
                'height': 65,
                'strokewidth': 1,
              },
            },
            'states': [
              {
                'kind': 'state',
                'name': '_default_Hover',
                'data': {
                  'hotlinkId': '',
                  'accState': 0,
                  'vectorData': {
                    'left': -1,
                    'top': -1,
                    'right': 203,
                    'bottom': 64,
                    'altText': 'START COURSE',
                    'pngfb': false,
                    'pr': {
                      'l': 'Lib',
                      'i': 6,
                    },
                  },
                  'html5data': {
                    'xPos': -1,
                    'yPos': -1,
                    'width': 204,
                    'height': 65,
                    'strokewidth': 1,
                  },
                },
              },
            ],
            'animations': [
              {
                'kind': 'animation',
                'id': 'Entrance',
                'duration': 250,
                'hidetextatstart': true,
                'animateshapewithtext': false,
                'tweens': [
                  {
                    'kind': 'tween',
                    'time': 0,
                    'duration': 250,
                    'alpha': {
                      'path': [
                        {
                          'kind': 'segment',
                          'start': '0',
                          'dstart': '0',
                          'end': '100',
                          'dend': '0',
                        },
                      ],
                      'duration': 250,
                      'easing': 'linear',
                      'easingdir': 'easein',
                    },
                  },
                ],
              },
            ],
            'width': 201,
            'height': 62,
            'resume': false,
            'useHandCursor': true,
            'id': '5g48uPtagut',
            'variables': [
              {
                'kind': 'variable',
                'name': '_hover',
                'type': 'boolean',
                'value': false,
                'resume': true,
              },
              {
                'kind': 'variable',
                'name': '_state',
                'type': 'string',
                'value': '_default',
                'resume': true,
              },
              {
                'kind': 'variable',
                'name': '_disabled',
                'type': 'boolean',
                'value': false,
                'resume': true,
              },
              {
                'kind': 'variable',
                'name': '_stateName',
                'type': 'string',
                'value': '_default',
                'resume': true,
              },
              {
                'kind': 'variable',
                'name': '_tempStateName',
                'type': 'string',
                'value': '',
                'resume': false,
              },
              {
                'kind': 'variable',
                'name': '_tempStateNameBuilder',
                'type': 'string',
                'value': '',
                'resume': false,
              },
            ],
            'actionGroups': {
              'ActGrpSetHoverState': {
                'kind': 'actiongroup',
                'actions': [
                  {
                    'kind': 'adjustvar',
                    'variable': '_hover',
                    'operator': 'set',
                    'value': {
                      'type': 'boolean',
                      'value': true,
                    },
                  },
                  {
                    'kind': 'exe_actiongroup',
                    'id': '_player._setstates',
                    'scopeRef': {
                      'type': 'string',
                      'value': '_this',
                    },
                  },
                ],
              },
              'ActGrpClearHoverState': {
                'kind': 'actiongroup',
                'actions': [
                  {
                    'kind': 'adjustvar',
                    'variable': '_hover',
                    'operator': 'set',
                    'value': {
                      'type': 'boolean',
                      'value': false,
                    },
                  },
                  {
                    'kind': 'exe_actiongroup',
                    'id': '_player._setstates',
                    'scopeRef': {
                      'type': 'string',
                      'value': '_this',
                    },
                  },
                ],
              },
              'ActGrpClearStateVars': {
                'kind': 'actiongroup',
                'actions': [
                  {
                    'kind': 'adjustvar',
                    'variable': '_hover',
                    'operator': 'set',
                    'value': {
                      'type': 'boolean',
                      'value': false,
                    },
                  },
                ],
              },
            },
            'events': [
              {
                'kind': 'onrelease',
                'actions': [
                  {
                    'kind': 'exe_actiongroup',
                    'id': '_this.ActGrpClearHoverState',
                  },
                  {
                    'kind': 'gotoplay',
                    'window': '_current',
                    'wndtype': 'normal',
                    'objRef': {
                      'type': 'string',
                      'value': '_player.6qDJpFGfLa2.5lf5DNczXQc',
                    },
                  },
                ],
              },
              {
                'kind': 'ontransitionin',
                'actions': [
                  {
                    'kind': 'exe_actiongroup',
                    'id': '_player._setstates',
                    'scopeRef': {
                      'type': 'string',
                      'value': '_this',
                    },
                  },
                ],
              },
              {
                'kind': 'onrollover',
                'actions': [
                  {
                    'kind': 'exe_actiongroup',
                    'id': 'ActGrpSetHoverState',
                    'scopeRef': {
                      'type': 'string',
                      'value': '_this',
                    },
                  },
                ],
              },
              {
                'kind': 'onrollout',
                'actions': [
                  {
                    'kind': 'exe_actiongroup',
                    'id': 'ActGrpClearHoverState',
                    'scopeRef': {
                      'type': 'string',
                      'value': '_this',
                    },
                  },
                ],
              },
            ],
          },
          {
            'kind': 'vectorshape',
            'rotation': 0,
            'accType': 'text',
            'cliptobounds': false,
            'defaultAction': '',
            'textLib': [
              {
                'kind': 'textdata',
                'uniqueId': '6qdJhAWS3Ze_5F37A5BA',
                'id': '01',
                'linkId': 'txt__default_6qdJhAWS3Ze',
                'type': 'acctext',
                'xPos': 10,
                'yPos': 5,
                'xAccOffset': 10,
                'yAccOffset': 5,
                'width': 485,
                'height': 201,
                'valign': 'top',
                'wordwrap': true,
                'textshadow': false,
                'shadowIndex': -1,
                'scrollOverflow': false,
                'textLibItemId': '6qdJhAWS3Ze',
                'vartext': {
                  'blocks': [
                    {
                      'spans': [
                        {
                          'text': 'We are excited to have you join us on this learning journey. \n',
                          'style': {
                            'fontFamily':
                              '"Noto Sans Light CharsetECBD6D8A","Noto Sans Charset0_v9TYB8D7B513","Noto Sans Light","Noto Sans"',
                            'ascent': 17.800830841064453,
                            'descent': 4.878992557525635,
                            'leading': 0,
                            'underlinePosition': -1.6651852130889893,
                            'underlineThickness': 0.8325926065444946,
                            'xHeight': 8.925392150878906,
                          },
                        },
                      ],
                      'style': {
                        'leadingMargin': 0,
                        'firstLineMargin': 0,
                        'listStyle': {
                          'listType': 'none',
                          'size': 100,
                          'bulletFont': 'Arial',
                          'bulletPicture': {
                            'w': 0,
                            'h': 0,
                            'base64': 0,
                          },
                        },
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 62,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                    {
                      'spans': [
                        {
                          'text': '\n',
                          'style': {
                            'fontFamily':
                              '"Noto Sans Light CharsetECBD6D8A","Noto Sans Charset0_v9TYB8D7B513","Noto Sans Light","Noto Sans"',
                            'ascent': 17.800830841064453,
                            'descent': 4.878992557525635,
                            'leading': 0,
                            'underlinePosition': -1.6651852130889893,
                            'underlineThickness': 0.8325926065444946,
                            'xHeight': 8.925392150878906,
                          },
                        },
                      ],
                      'style': {
                        'leadingMargin': 0,
                        'firstLineMargin': 0,
                        'listStyle': {
                          'listType': 'none',
                          'size': 100,
                          'bulletFont': 'Arial',
                          'bulletPicture': {
                            'w': 0,
                            'h': 0,
                            'base64': 0,
                          },
                        },
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 1,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                    {
                      'spans': [
                        {
                          'text':
                            'This course is designed to help you having realistic customer service conversations and decide what to check, explain or escalate when new customers are navigating the platform.\n',
                          'style': {
                            'fontFamily':
                              '"Noto Sans Light CharsetECBD6D8A","Noto Sans Charset0_v9TYB8D7B513","Noto Sans Light","Noto Sans"',
                            'ascent': 17.800830841064453,
                            'descent': 4.878992557525635,
                            'leading': 0,
                            'underlinePosition': -1.6651852130889893,
                            'underlineThickness': 0.8325926065444946,
                            'xHeight': 8.925392150878906,
                          },
                        },
                      ],
                      'style': {
                        'leadingMargin': 0,
                        'firstLineMargin': 0,
                        'lineSpacingRule': 'single',
                        'listStyle': {
                          'listType': 'none',
                          'size': 100,
                          'bulletFont': 'Arial',
                          'bulletPicture': {
                            'w': 0,
                            'h': 0,
                            'base64': 0,
                          },
                        },
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 178,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                    {
                      'spans': [
                        {
                          'text': 'Let’s go!',
                          'style': {
                            'fontFamily':
                              '"Noto Sans Light CharsetECBD6D8A","Noto Sans Charset0_v9TYB8D7B513","Noto Sans Light","Noto Sans"',
                            'ascent': 17.800830841064453,
                            'descent': 4.878992557525635,
                            'leading': 0,
                            'underlinePosition': -1.6651852130889893,
                            'underlineThickness': 0.8325926065444946,
                            'xHeight': 8.925392150878906,
                          },
                        },
                      ],
                      'style': {
                        'leadingMargin': 0,
                        'firstLineMargin': 0,
                        'lineSpacingRule': 'single',
                        'listStyle': {
                          'listType': 'none',
                          'size': 100,
                          'bulletFont': 'Arial',
                          'bulletPicture': {
                            'w': 0,
                            'h': 0,
                            'base64': 0,
                          },
                        },
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 9,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                  ],
                  'defaultBlockStyle': {
                    'flowDirection': 'leftToRight',
                    'leadingMargin': 0,
                    'trailingMargin': 0,
                    'firstLineMargin': 0,
                    'justification': 'left',
                    'defaultTabStop': 49.955555,
                    'listLevel': 0,
                    'lineSpacingRule': 'multiple',
                    'lineSpacing': 20,
                    'indentSize': 37.466667,
                    'spacingBefore': 0,
                    'spacingAfter': 0,
                    'baseSpanStyle': {
                      'fontFamily': 'Open Sans',
                      'fontSize': 12.488889,
                      'fontIsBold': false,
                      'fontIsItalic': false,
                      'fontIsUnderline': false,
                      'fontIsStrikeout': false,
                      'underlineStyle': 'normal',
                      'elevation': 'normal',
                      'spacing': 0,
                      'ignoreKerningTable': false,
                      'displayCase': 'asIs',
                      'languageId': 0,
                      'foregroundColor': '#000000',
                      'linkColor': '#0000FF',
                    },
                    'listStyle': {
                      'listType': 'none',
                      'listTypeFormat': 'plain',
                      'start': 0,
                      'size': 100,
                    },
                  },
                  'direction': 'horizontal',
                },
                'vectortext': {
                  'left': 0,
                  'top': 0,
                  'right': 472,
                  'bottom': 142,
                  'pngfb': false,
                  'pr': {
                    'l': 'Lib',
                    'i': 9,
                  },
                },
              },
            ],
            'shapemaskId': '',
            'xPos': 382,
            'yPos': 139,
            'tabIndex': 2,
            'tabEnabled': true,
            'referenceName': '6qdJhAWS3Ze',
            'morphReferenceName': '6qdJhAWS3Ze',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 252.5,
            'rotateYPos': 105.5,
            'scaleX': 100,
            'scaleY': 100,
            'alpha': 100,
            'depth': 2,
            'scrolling': true,
            'shuffleLock': false,
            'data': {
              'hotlinkId': '',
              'accState': 0,
              'vectorData': {
                'left': 0,
                'top': 0,
                'right': 505,
                'bottom': 211,
                'altText':
                  'We are excited to have you join us on this learning journey. \n\nThis course is designed to help you having realistic customer service conversations and decide what to check, explain or escalate when new customers are navigating the platform.\nLet’s go!',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 8,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 505,
                'height': 211,
                'strokewidth': 0,
              },
            },
            'animations': [
              {
                'kind': 'animation',
                'id': 'Entrance',
                'duration': 750,
                'hidetextatstart': true,
                'animateshapewithtext': false,
                'tweens': [
                  {
                    'kind': 'tween',
                    'time': 0,
                    'duration': 750,
                    'alpha': {
                      'path': [
                        {
                          'kind': 'segment',
                          'start': '0',
                          'dstart': '0',
                          'end': '100',
                          'dend': '0',
                        },
                      ],
                      'duration': 750,
                      'easing': 'linear',
                      'easingdir': 'easein',
                    },
                  },
                ],
              },
            ],
            'width': 505,
            'height': 211,
            'resume': false,
            'useHandCursor': true,
            'id': '6qdJhAWS3Ze',
          },
          {
            'kind': 'vectorshape',
            'rotation': 0,
            'accType': 'text',
            'cliptobounds': false,
            'defaultAction': '',
            'textLib': [
              {
                'kind': 'textdata',
                'uniqueId': '5XisRlgzgGn_FF66696A',
                'id': '01',
                'linkId': 'txt__default_5XisRlgzgGn',
                'type': 'acctext',
                'xPos': 10,
                'yPos': 5,
                'xAccOffset': 10,
                'yAccOffset': 5,
                'width': 554,
                'height': 61,
                'valign': 'top',
                'wordwrap': true,
                'textshadow': false,
                'shadowIndex': -1,
                'scrollOverflow': false,
                'textLibItemId': '5XisRlgzgGn',
                'vartext': {
                  'blocks': [
                    {
                      'spans': [
                        {
                          'text': 'Welcome to the Course!',
                          'style': {
                            'fontFamily': '"Georgia Charset0_v2mMMb9D06365F","Georgia"',
                            'fontSize': 24.977777,
                            'fontIsBold': false,
                            'fontIsItalic': false,
                            'fontIsUnderline': false,
                            'fontIsStrikeout': false,
                            'elevation': 'normal',
                            'spacing': -1.5,
                            'displayCase': 'asIs',
                            'foregroundColor': '#000000',
                            'linkColor': '#0000FF',
                            'ascent': 30.539236068725586,
                            'descent': 7.301446437835693,
                            'leading': 0,
                            'underlinePosition': -2.943344831466675,
                            'underlineThickness': 1.6424189805984497,
                            'xHeight': 16.033912658691406,
                          },
                        },
                      ],
                      'style': {
                        'leadingMargin': 0,
                        'firstLineMargin': 0,
                        'spacingBefore': 16.651852,
                        'spacingAfter': 8.325926,
                        'baseSpanStyle': {
                          'fontFamily': 'Open Sans',
                          'fontSize': 24.977777,
                          'fontIsBold': false,
                          'fontIsItalic': false,
                          'fontIsUnderline': false,
                          'fontIsStrikeout': false,
                          'elevation': 'normal',
                          'displayCase': 'asIs',
                          'foregroundColor': '#000000',
                          'linkColor': '#0000FF',
                        },
                        'listStyle': {
                          'listType': 'none',
                          'size': 100,
                          'bulletFont': 'Arial',
                          'bulletPicture': {
                            'w': 0,
                            'h': 0,
                            'base64': 0,
                          },
                        },
                        'tagType': 'H1',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 22,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                  ],
                  'defaultBlockStyle': {
                    'flowDirection': 'leftToRight',
                    'leadingMargin': 0,
                    'trailingMargin': 0,
                    'firstLineMargin': 0,
                    'justification': 'left',
                    'defaultTabStop': 49.955555,
                    'listLevel': 0,
                    'lineSpacingRule': 'multiple',
                    'lineSpacing': 20,
                    'indentSize': 37.466667,
                    'spacingBefore': 0,
                    'spacingAfter': 0,
                    'baseSpanStyle': {
                      'fontFamily': 'Open Sans',
                      'fontSize': 12.488889,
                      'fontIsBold': false,
                      'fontIsItalic': false,
                      'fontIsUnderline': false,
                      'fontIsStrikeout': false,
                      'underlineStyle': 'normal',
                      'elevation': 'normal',
                      'spacing': 0,
                      'ignoreKerningTable': false,
                      'displayCase': 'asIs',
                      'languageId': 0,
                      'foregroundColor': '#000000',
                      'linkColor': '#0000FF',
                    },
                    'listStyle': {
                      'listType': 'none',
                      'listTypeFormat': 'plain',
                      'start': 0,
                      'size': 100,
                    },
                  },
                  'direction': 'horizontal',
                },
                'vectortext': {
                  'left': 0,
                  'top': 0,
                  'right': 317,
                  'bottom': 43,
                  'pngfb': false,
                  'pr': {
                    'l': 'Lib',
                    'i': 11,
                  },
                },
              },
            ],
            'shapemaskId': '',
            'xPos': 382,
            'yPos': 56,
            'tabIndex': 1,
            'tabEnabled': true,
            'referenceName': '5XisRlgzgGn',
            'morphReferenceName': '5XisRlgzgGn',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 289.5,
            'rotateYPos': 35.5,
            'scaleX': 100,
            'scaleY': 100,
            'alpha': 100,
            'depth': 3,
            'scrolling': true,
            'shuffleLock': false,
            'data': {
              'hotlinkId': '',
              'accState': 0,
              'vectorData': {
                'left': 0,
                'top': 0,
                'right': 579,
                'bottom': 71,
                'altText': 'Welcome to the Course!',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 10,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 579,
                'height': 71,
                'strokewidth': 0,
              },
            },
            'animations': [
              {
                'kind': 'animation',
                'id': 'Entrance',
                'duration': 750,
                'hidetextatstart': true,
                'animateshapewithtext': false,
                'tweens': [
                  {
                    'kind': 'tween',
                    'time': 0,
                    'duration': 750,
                    'alpha': {
                      'path': [
                        {
                          'kind': 'segment',
                          'start': '0',
                          'dstart': '0',
                          'end': '100',
                          'dend': '0',
                        },
                      ],
                      'duration': 750,
                      'easing': 'linear',
                      'easingdir': 'easein',
                    },
                  },
                ],
              },
            ],
            'width': 579,
            'height': 71,
            'resume': false,
            'useHandCursor': true,
            'id': '5XisRlgzgGn',
          },
          {
            'kind': 'vectorshape',
            'rotation': 0,
            'accType': 'image',
            'cliptobounds': false,
            'defaultAction': '',
            'imagelib': [
              {
                'kind': 'imagedata',
                'assetId': 1,
                'id': '01',
                'url': 'story_content/6hNKf6psaAo_P_1042_0_591_941.png',
                'type': 'normal',
                'altText': 'airport_operations_support_team.png',
                'width': 591,
                'height': 941,
                'mobiledx': 0,
                'mobiledy': 0,
              },
            ],
            'shapemaskId': '',
            'xPos': 0,
            'yPos': 0,
            'tabIndex': 0,
            'tabEnabled': true,
            'referenceName': '6UivBu5BEWQ',
            'morphReferenceName': '6UivBu5BEWQ',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 175,
            'rotateYPos': 281,
            'scaleX': 100,
            'scaleY': 100,
            'alpha': 100,
            'depth': 4,
            'scrolling': true,
            'shuffleLock': false,
            'data': {
              'hotlinkId': '',
              'accState': 0,
              'vectorData': {
                'left': 0,
                'top': 0,
                'right': 350,
                'bottom': 562,
                'altText': 'airport_operations_support_team.png',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 12,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 350,
                'height': 562,
                'strokewidth': 0,
              },
            },
            'animations': [
              {
                'kind': 'animation',
                'id': 'Entrance',
                'duration': 750,
                'hidetextatstart': true,
                'animateshapewithtext': false,
                'tweens': [
                  {
                    'kind': 'tween',
                    'time': 0,
                    'duration': 750,
                    'alpha': {
                      'path': [
                        {
                          'kind': 'segment',
                          'start': '0',
                          'dstart': '0',
                          'end': '100',
                          'dend': '0',
                        },
                      ],
                      'duration': 750,
                      'easing': 'linear',
                      'easingdir': 'easein',
                    },
                  },
                ],
              },
            ],
            'width': 350,
            'height': 562,
            'resume': false,
            'useHandCursor': true,
            'id': '6UivBu5BEWQ',
          },
        ],
        'startTime': -1,
        'elapsedTimeMode': 'normal',
        'useHandCursor': false,
        'resume': false,
        'kind': 'slidelayer',
        'isBaseLayer': true,
      },
    ],
  }),
);
