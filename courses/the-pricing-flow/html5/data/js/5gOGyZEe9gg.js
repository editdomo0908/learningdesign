/*
 * Generated Storyline slide: Starting Screen.
 * File identifier: 5gOGyZEe9gg.js.
 * The data is expanded here so its fields can be read in an editor.
 * JSON.stringify preserves the string-based interface expected by the player.
 * Make lasting course-content changes in Storyline, then republish.
 */

window.globalProvideData(
  'slide',
  JSON.stringify({
    'title': 'Starting Screen',
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
    'slideNumberInScene': 1,
    'includeInSlideCounts': true,
    'presenterRef': {
      'id': 'none',
    },
    'showAnimationId': '',
    'lmsId': 'Slide1',
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
    'id': '5gOGyZEe9gg',
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
              'value': '_player.6qDJpFGfLa2.6CoJj3uqkMn',
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
      'NavigationRestrictionNextSlide_5gOGyZEe9gg': {
        'kind': 'actiongroup',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'ActGrpOnNextButtonClick',
          },
        ],
      },
      'NavigationRestrictionPreviousSlide_5gOGyZEe9gg': {
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
            'id': 'NavigationRestrictionNextSlide_5gOGyZEe9gg',
          },
        ],
      },
      {
        'kind': 'onprevslide',
        'actions': [
          {
            'kind': 'exe_actiongroup',
            'id': 'NavigationRestrictionPreviousSlide_5gOGyZEe9gg',
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
          'duration': 4500,
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
                    'value': '6NoZCWZFWti',
                  },
                },
              ],
            },
            {
              'kind': 'ontimelinetick',
              'time': 500,
              'actions': [
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '6BmN02ILq9U',
                  },
                },
              ],
            },
            {
              'kind': 'ontimelinetick',
              'time': 1750,
              'actions': [
                {
                  'kind': 'show',
                  'transition': 'custom',
                  'animationId': 'Entrance',
                  'reverse': false,
                  'objRef': {
                    'type': 'string',
                    'value': '5o9hmcyLCoV',
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
            'accType': 'image',
            'cliptobounds': false,
            'defaultAction': '',
            'imagelib': [
              {
                'kind': 'imagedata',
                'assetId': 0,
                'id': '01',
                'url': 'story_content/6VQuWkJ6NK6.png',
                'type': 'normal',
                'altText': 'airport_teamwork_at_sunrise.png',
                'width': 1672,
                'height': 941,
                'mobiledx': 0,
                'mobiledy': 0,
              },
            ],
            'shapemaskId': '',
            'xPos': 0,
            'yPos': -1,
            'tabIndex': 0,
            'tabEnabled': true,
            'referenceName': '6NoZCWZFWti',
            'morphReferenceName': '6NoZCWZFWti',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 500,
            'rotateYPos': 281.5,
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
                'left': 0,
                'top': 0,
                'right': 1000,
                'bottom': 563,
                'altText': 'airport_teamwork_at_sunrise.png',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 0,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 1000,
                'height': 563,
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
            'width': 1000,
            'height': 563,
            'resume': false,
            'useHandCursor': true,
            'id': '6NoZCWZFWti',
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
                'uniqueId': '6BmN02ILq9U_15560DE9',
                'id': '01',
                'linkId': 'txt__default_6BmN02ILq9U',
                'type': 'acctext',
                'xPos': 5,
                'yPos': 2,
                'xAccOffset': 5,
                'yAccOffset': 2,
                'width': 412,
                'height': 152,
                'valign': 'top',
                'wordwrap': false,
                'textshadow': false,
                'shadowIndex': -1,
                'scrollOverflow': false,
                'textLibItemId': '6BmN02ILq9U',
                'vartext': {
                  'blocks': [
                    {
                      'spans': [
                        {
                          'text': 'SUPPORTING\n',
                          'style': {
                            'fontFamily': '"Georgia Charset0_v2mMMb9D06365F","Georgia"',
                            'fontSize': 49.955555,
                            'spacing': -1.5611111,
                            'ascent': 61.07847213745117,
                            'descent': 14.602892875671387,
                            'leading': 0,
                            'underlinePosition': -5.88668966293335,
                            'underlineThickness': 3.2848379611968994,
                            'xHeight': 32.06782531738281,
                          },
                        },
                      ],
                      'style': {
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 11,
                          'flowDirection': 'leftToRight',
                          'cursive': false,
                        },
                      ],
                    },
                    {
                      'spans': [
                        {
                          'text': 'CUSTOMERS ',
                          'style': {
                            'fontFamily': '"Georgia Charset0_v2mMMb9D06365F","Georgia"',
                            'fontSize': 49.955555,
                            'spacing': -1.5611111,
                            'ascent': 61.07847213745117,
                            'descent': 14.602892875671387,
                            'leading': 0,
                            'underlinePosition': -5.88668966293335,
                            'underlineThickness': 3.2848379611968994,
                            'xHeight': 32.06782531738281,
                          },
                        },
                      ],
                      'style': {
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 10,
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
                  'right': 417,
                  'bottom': 154,
                  'pngfb': false,
                  'pr': {
                    'l': 'Lib',
                    'i': 2,
                  },
                },
              },
            ],
            'shapemaskId': '',
            'xPos': 38,
            'yPos': 44,
            'tabIndex': 1,
            'tabEnabled': true,
            'referenceName': '6BmN02ILq9U',
            'morphReferenceName': '6BmN02ILq9U',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 211,
            'rotateYPos': 78,
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
                'right': 422,
                'bottom': 156,
                'altText': 'SUPPORTING\nCUSTOMERS ',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 1,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 422,
                'height': 156,
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
                    'position': {
                      'relativerotation': false,
                      'relativestartpoint': false,
                      'path': [
                        {
                          'kind': 'segment',
                          'type': 'line',
                          'anchora': {
                            'x': '$RawXPos',
                            'y': '$RawYPos',
                            'dx': '-465',
                            'dy': '0',
                          },
                          'anchorb': {
                            'x': '$RawXPos',
                            'y': '$RawYPos',
                            'dx': '0',
                            'dy': '0',
                          },
                        },
                      ],
                      'duration': 750,
                      'easing': 'cubic',
                      'easingdir': 'easeout',
                    },
                  },
                ],
              },
            ],
            'width': 422,
            'height': 156,
            'resume': false,
            'useHandCursor': true,
            'id': '6BmN02ILq9U',
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
                'uniqueId': '5o9hmcyLCoV_AC4EB4DB',
                'id': '01',
                'linkId': 'txt__default_5o9hmcyLCoV',
                'type': 'acctext',
                'xPos': 10,
                'yPos': 5,
                'xAccOffset': 10,
                'yAccOffset': 5,
                'width': 410,
                'height': 110,
                'valign': 'top',
                'wordwrap': true,
                'textshadow': false,
                'shadowIndex': -1,
                'scrollOverflow': false,
                'textLibItemId': '5o9hmcyLCoV',
                'vartext': {
                  'blocks': [
                    {
                      'spans': [
                        {
                          'text': 'IN UNDERSTANDING THE PRICING LOGIC',
                          'style': {
                            'fontFamily': '"Noto SansBold CharsBold8AEA5E3F","Noto Sans"',
                            'fontSize': 14,
                            'fontIsBold': true,
                            'foregroundColor': '#E46C0A',
                            'linkColor': '#E46C0A',
                            'ascent': 19.954668045043945,
                            'descent': 5.469333648681641,
                            'leading': 0,
                            'underlinePosition': -1.8666667938232422,
                            'underlineThickness': 0.9333333969116211,
                            'xHeight': 10.00533390045166,
                          },
                        },
                      ],
                      'style': {
                        'tagType': 'P',
                      },
                      'runs': [
                        {
                          'idx': 0,
                          'len': 34,
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
                  'right': 388,
                  'bottom': 31,
                  'pngfb': false,
                  'pr': {
                    'l': 'Lib',
                    'i': 4,
                  },
                },
              },
            ],
            'shapemaskId': '',
            'xPos': 40,
            'yPos': 200,
            'tabIndex': 2,
            'tabEnabled': true,
            'referenceName': '5o9hmcyLCoV',
            'morphReferenceName': '5o9hmcyLCoV',
            'xOffset': 0,
            'yOffset': 0,
            'rotateXPos': 215,
            'rotateYPos': 60,
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
                'right': 430,
                'bottom': 120,
                'altText': 'IN UNDERSTANDING THE PRICING LOGIC',
                'pngfb': false,
                'pr': {
                  'l': 'Lib',
                  'i': 3,
                },
              },
              'html5data': {
                'xPos': 0,
                'yPos': 0,
                'width': 430,
                'height': 120,
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
            'width': 430,
            'height': 120,
            'resume': false,
            'useHandCursor': true,
            'id': '5o9hmcyLCoV',
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
