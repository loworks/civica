import React from "react";
import { Global, css } from "@emotion/react";
import * as Font from "./fontface";
import * as Common from "../common";
import * as Styles from "./";
import * as Wp from "./Wp";

export const GlobalStyle = (props) => {
	const gradientStanp = (props) => {
		return css`
			position: relative;
			display: block !important;
			svg {
				margin-top: 0px;
			}
			a {
				position: relative;
				white-space: nowrap !important;
				display: inline-flex !important;
				align-items: center;
				padding: 5px 13px 7px 8px;
				span {
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					position: relative;
					z-index: 100;
					line-height: normal !important;
				}
				&:before {
					content: " ";
					position: absolute;
					background-color: #fff;
					border-radius: 10px;
					width: 100%;
					height: 100%;
					left: 0px;
					z-index: 0;
				}
			}
		`;
	};
	return (
		<Global
			styles={css`
      ${Styles.RichTextCss.RichTextCss()}
       *,
        ::after,
        ::before {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
      html {
        -webkit-font-smoothing: antialiased;

      }

      .text-block-for-story {
        .rt-cont {
          max-height: 70vh;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none;
            -webkit-appearance: none;
          }
        }
        div.img-cont {
          opacity: 0.1;
        }
      }


      iframe{
        .on-story & {
          pointer-events:none;
          a {
            pointer-events:none;
          }
        }
      }
      .img-cont.fit-100vh {
         height:100vh;
         ${Styles.Mq.lessPab} {

        }
        .gatsby-image-wrapper {
           height:100vh;
        }
      }
      body {
        color: #000;
        ${Font.SanSerif()};
        height: 100vh;

        line-height: 1.75;
        background-color: ${Common.Config.bgColor};
        .on-menu & , .on-bag, .on-story &{
          overflow: hidden;
          height: 100%;
        }
      }
      .initioal-loader {
        .root & {
          visibility:hidden;
        }
      }
      .init-animat-cont {
        .img-element {
          overflow: hidden !important;
          >* {

          }
        }
        .text-element {
        /*overflow: hidden;*/
      }
      }

a.textAnchor {
  position: relative;

    &:before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      border-bottom: 1.5px solid #000;
    }
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: $bottom;
      width: 100%;
      bottom: 1px;
      border-bottom: 1.5px solid #fcfcf9;
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover:after {
      transform: scaleX(1);
    }
}

      a {
        color:#121212;
        &.bg {
          background-color:#ff0;
        }
        &:hover {
          color:#121212;
        }
        &:visited {
          color:#121212;
        }
      }

      .bold {
        ${Font.Bold()};
      }
      .san-serif {
        ${Font.SanSerif()};
      }

      .tl-edges {
        overflow-x: visible;
        &:after {
          clear: both;
          content: '';
          display: block;
        }
      }

      ::selection {
        background: #121212;
        color: #fff;
      }
    .tl-wrapper {
      backface-visibility: hidden;

    }
.tl-wrapper {
      >section {
          &:first-child {
            .transition-page & {
              opacity: 0;
              transform: translateY(50px);
              position:relative
            }
          }
      }
}
    .tl-wrapper--mount {
      >section {
          &:first-child {
            .transition-page & {
              opacity: 0;
              transform: translateY(50px);
              position:relative
            }
          }
      }
      .story-next & {
          transform: translateX(100%);

          opacity:.5;

         }
         .story-prev & {
           transform: translateX(-100%);

          opacity:.5;

         }
    }
      .tl-wrapper + .tl-wrapper {

        >section {
          &:first-child {
          .transition-fade-in & {
            opacity: 0;

            position:relative
           }
          }
        }

         .story-next & {
          transform: translateX(100%);

          opacity:.5;

         }
         .story-prev & {
           transform: translateX(-100%);

          opacity:.5;

         }
      }
  .rt-cont.inline-block-border-bottom {
   p {
        display:inline-block !important;
        border-bottom: 1px solid;
    }


      }
.round-background-white {
          background-color: #fff;
          color: #000;
          border-radius: 10px;
          padding: 10px;
          white-space: nowrap;
          display: inline-block !important;
        }
        .link-icon-element {
          svg {
            vertical-align: middle;
            margin-right: 5px;
            margin-top: -3px;
          }
        }
        .round-background-gray {
          background-color: #cccccc;
          color: #fff;
          border-radius: 10px;
          padding: 10px;
          white-space: nowrap;
          display: inline-block !important;
        }
        .red-yelow-whitebg-stamp, .red-yellow-nobg {
          ${gradientStanp()}
          svg {
            fill: #e21000;
          }
          span {
            background-image: linear-gradient(to left, #f5c31c, orange, red);
          }
        }
        .violet-blue-whitebg-stamp, .violet-blue-nobg {
          ${gradientStanp()}
          svg {
            fill: violet;
          }
          span {
            background-image: linear-gradient(to left, blue, indigo, violet);
          }
        }
         .red-yellow-nobg ,  .violet-blue-nobg  {
           a {
             padding:0;

           }
         }
        .rainbow-whitebg-stamp {
          ${gradientStanp()}
          span {
            background-image: linear-gradient(
              to left,
              violet,
              indigo,
              blue,
              green,
              yellow,
              orange,
              red
            );
          }
        }
        .block-bg-white {
          background-color: #fff;
          padding-top: 8px;
          padding-bottom: 10px;
          padding-left: 8px !important;
          padding-right: 8px !important;
        }
        .inline-bg-white {
          line-height: 21px;
          padding-left: 10px !important;
          padding-right: 10px !important;

          h1,
          h2,
          h3 {
            display: block;
            background-color: #fff;
            box-shadow: 10px 0 0px 0px #fff, -10px 0 0px 0px #fff;
            padding-top: 1px;
            padding-bottom: 1px;
            color: black;
          }
          p {
            display: inline;
            background-color: #fff;
            box-shadow: 10px 0 0px 0px #fff, -10px 0 0px 0px #fff;
            padding-top: 1px;
            padding-bottom: 1px;
            color: black;
          }
        }
        .inline-bg-black {
          line-height: 21px;
          padding-left: 10px !important;
          padding-right: 10px !important;
          p {
            display: inline;
            background-color: #000;
            box-shadow: 10px 0 0px 0px #000, -10px 0 0px 0px #000;
            padding-top: 1px;
            padding-bottom: 1px;
            color: white;
          }
        }
      .blocks {
        ${Wp.Blocks()}
        ${Wp.CommonCss()}
        ${Wp.Space()}



      }

    `}
		/>
	);
};
