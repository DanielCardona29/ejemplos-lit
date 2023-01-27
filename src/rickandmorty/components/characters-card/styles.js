import { css } from 'lit';

export default css`
        *{
            margin: 0;
            padding: 0;
        }
        .wrapper-card {
            display:flex;
            user-select:none;
            cursor: pointer;    
            transition: .4s;
            justify-content:space-between;
            align-items: center;
            flex-direction:row;
            height: auto;
            background:#f2cbed;
            margin: 10px;
            border-radius: 8px;
            width: 600px;
        }

        .wrapper-card:hover{
            transform: scale(1.1);
        }

        .wrapper-card:active{
            transform: scale(0.9);
        }

        .description-wrapper{
            border-top-right-radius: 8px;
            background: #12090c;
            color: #fff;
            height:150px;
            width: 100%;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            display:flex;
            flex-direction:column;
        }

        .flex-col{
            display:flex;
            flex-direction:column;
        }
        .flex-row{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
        }

        .flex-row>span{
            margin-left: 15px;
        }
        .description>h3{
            width:75px;
            text-align:start;
        }
        .info-wrapper{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width: 90%;
        }

        .Dead{
            background-color: #e72313;
        }
        .unknown{
            background-color: #85847e;
        }

        .Alive{
            background-color: #65a675;
        }

        .status{
            display:block;
            width:10px;
            height:10px;
            border-radius: 100%;
            margin-right: 10px;
        }
    `