import Controller from './Controller.js';
import fs from 'fs';
import path from 'path';

export default class MathsController extends Controller {
    constructor(HttpContext ) {
        super(HttpContext);
        
    }

    get() {
        
        
        if (this.HttpContext.path.params.op == ' ') {
            let params = this.HttpContext.path.params;
            if (Object.keys(params).length != 3) {

                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "+", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {


                if (!isNaN(params.x)) {

                    if (!isNaN(params.y)) {
                        let val = Number(params.x) + Number(params.y);
                        params = ({ ...params, op: "+", value: val });
                        this.HttpContext.response.JSON(params);
                    }
                    else {
                        let errorh = "y n'est pas un chiffre";
                        params = ({ ...params, op: "+", error: errorh });
                        this.HttpContext.response.JSON(params);
                    }
                }
                else {
                    let errorh = "x n'est pas un chiffre";
                    params = ({ ...params, op: "+", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
            }




        }
        else if ( this.HttpContext.path.params.op == '-') {
            let params = this.HttpContext.path.params;
            if (Object.keys(params).length != 3) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "-", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
                if (!isNaN(params.x)) {

                    if (!isNaN(params.y)) {
                        let val = Number(params.x) - Number(params.y);
                        params = ({ ...params, op: "-", value: val });
                        this.HttpContext.response.JSON(params);
                    }
                    else {
                        let errorh = "y n'est pas un chiffre";
                        params = ({ ...params, op: "-", error: errorh });
                        this.HttpContext.response.JSON(params);
                    }
                }
                else {
                    let errorh = "x n'est pas un chiffre";
                    params = ({ ...params, op: "-", error: errorh });
                    this.HttpContext.response.JSON(params);
                }


            }


        }
        else if ( this.HttpContext.path.params.op == '*') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 3) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "*", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.x)) {

                if (!isNaN(params.y)) {

                    let val = Number(params.x) * Number(params.y);
                    params = ({ ...params, op: "*", value: val });
                    this.HttpContext.response.JSON(params);
                }
                else {
                    let errorh = "y n'est pas un chiffre";
                    params = ({ ...params, op: "*", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
            }
            else {
                let errorh = "x n'est pas un chiffre";
                params = ({ ...params, op: "*", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            }



        }
        else if (this.HttpContext.path.params.op == '/') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 3) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "/", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.x)) {

                if (!isNaN(params.y)) {

                    if (Number(params.y) == 0) {

                        if (Number(params.x) == 0) {
                            params = ({ ...params, op: "/", value: "NaN" });
                            this.HttpContext.response.JSON(params);
                        }
                        else {
                            params = ({ ...params, op: "/", value: "Infinity" });
                            this.HttpContext.response.JSON(params);
                        }

                    }
                    else {
                        let val = Number(params.x) / Number(params.y);
                        console.log(typeof (params));
                        params = ({ ...params, op: "/", value: val });
                        this.HttpContext.response.JSON(params);
                    }


                }
                else {
                    let errorh = "y n'est pas un chiffre";
                    params = ({ ...params, op: "/", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
            }
            else {
                let errorh = "x n'est pas un chiffre";
                params = ({ ...params, op: "/", error: errorh });
                this.HttpContext.response.JSON(params);
            }

        }


        }
        else if (this.HttpContext.path.params.op == '%') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 3) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "%", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.x)) {

                if (!isNaN(params.y)) {

                    if (Number(params.y) == 0) {
                        params = ({ ...params, op: "%", value: "NaN" });
                        this.HttpContext.response.JSON(params);
                    }
                    else {
                        let val = Number(params.x) % Number(params.y);
                        console.log(typeof (params));
                        params = ({ ...params, op: "%", value: val });
                        this.HttpContext.response.JSON(params);
                    }
                }
                else {
                    let errorh = "y n'est pas un chiffre";
                    params = ({ ...params, op: "%", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
            }
            else {
                let errorh = "x n'est pas un chiffre";
                params = ({ ...params, op: "%", error: errorh });
                this.HttpContext.response.JSON(params);
            }
        }
    }
        else if (this.HttpContext.path.params.op == '!') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 2) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "!", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.n)) {
                if (Number(params.n) % 1 != 0) {

                    let errorh = "les chiffre a virgule ne sont pas accepter pour cette question";
                    params = ({ ...params, op: "!", error: errorh });
                    this.HttpContext.response.JSON(params);

                }
                else if (Number(params.n) > 0) {


                    let val = Number(params.n);
                    let other = Number(params.n);
                    for (let i = 1; other - i != 0; i++) {
                        val = (val * (other - i));
                    }

                    params = ({ ...params, op: "!", value: val });
                    this.HttpContext.response.JSON(params);
                }
                else if (Number(params.n == 0)) {

                    let errorh = "la factoriel de 0 est 1 mais le correcteur n'accepte pas cette réponce :P";
                    params = ({ ...params, op: "!", error: errorh });
                    this.HttpContext.response.JSON(params);


                }else if (Number(params.n < 0)) {

                    let errorh = "la factoriel d'un negatif n'existe pas";
                    params = ({ ...params, op: "!", error: errorh });
                    this.HttpContext.response.JSON(params);


                }
                else {
                    let errorh = "n n'est pas un chiffre";
                    params = ({ ...params, op: "!", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
            }
        }
    }
        else if (this.HttpContext.path.params.op == 'p') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 2) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "p", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.n)) {


                if (Number(params.n) % 1 != 0) {

                    let errorh = "les chiffre a virgule ne sont pas accepter pour cette question";
                    params = ({ ...params, op: "p", error: errorh });
                    this.HttpContext.response.JSON(params);

                }
                else if (Number(params.n) == 2) {

                    params = ({ ...params, op: "p", value: true });
                    this.HttpContext.response.JSON(params);


                }
                else if (Number(params.n) == 0) {

                    let errorh = "0 n'est pas pas premier et n'est pas composer";
                    params = ({ ...params, op: "p", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
                else if (Number(params.n) == 1) {

                    params = ({ ...params, op: "p", value: false });
                    this.HttpContext.response.JSON(params);
                }
                else if (Number(params.n) > 0) {

                    let nbmod = 0;
                    let val = Number(params.n);
                    let other = Number(params.n) - 1;
                    let i = 2;
                    while (i <= other && nbmod < 1) {

                        if ((val % i) == 0) {
                            nbmod++;

                        }
                        i++;


                    }

                    if (nbmod > 0) {

                        params = ({ ...params, op: "p", value: false });
                        this.HttpContext.response.JSON(params);
                    }
                    else {
                        console.log(typeof (params));
                        params = ({ ...params, op: "p", value: true });
                        this.HttpContext.response.JSON(params);
                    }


                }
                else if (Number(params.n) < 0) {


                    params = ({ ...params, op: "p", value: false });
                    this.HttpContext.response.JSON(params);


                }

            }
            else {
                let errorh = "n n'est pas un chiffre";
                params = ({ ...params, op: "p", error: errorh });
                this.HttpContext.response.JSON(params);
            }
        }
    }
        else if (this.HttpContext.path.params.op == 'np') {
            let params=this.HttpContext.path.params;
            if (Object.keys(params).length != 2) {
                let errorh = "il y a un parametre en trops";
                params = ({ ...params, op: "np", error: errorh });
                this.HttpContext.response.JSON(params);
            }
            else {
            if (!isNaN(params.n)) {
                if (Number(params.n) % 1 != 0) {

                    let errorh = "les chiffre a virgule ne sont pas accepter pour cette question";
                    params = ({ ...params, op: "np", error: errorh });
                    this.HttpContext.response.JSON(params);

                }
                else  if (Number(params.n) <= 0) {
                    let errorh = "n n'est pas un chiffre acceptable pour votre question";
                    params = ({ ...params, op: "np", error: errorh });
                    this.HttpContext.response.JSON(params);
                }
                else {
                    let prime = true;
                    let candidate = 2;
                    let count = 0;
                    let i = 2;
                    let n = Number(params.n);
                    for (candidate = 2, count = 0; count < n; ++candidate) {
                        prime = true;
                        i = 2;
                        while ((i < candidate) && (prime)) {

                            if ((candidate % i) == 0) {
                                prime = false;
                            }
                            i++;
                        }

                        if (prime) {
                            ++count;
                            if (count == n) {
                                break;
                            }

                        }



                    }

                    params = ({ ...params, op: "np", value: candidate });
                    this.HttpContext.response.JSON(params);


                }
            }
            else {
                let errorh = "n n'est pas un chiffre";
                params = ({ ...params, op: "np", error: errorh });
                this.HttpContext.response.JSON(params);
            }

        }
    }
    else if(Object.keys(this.HttpContext.path.params).length==0){
        this.help();
    }else{
        this.HttpContext.response.notImplemented();
    }
      



    }
    
    help() {
        let helpPagePath = path.join(process.cwd(), wwwroot, 'API-Help-Pages/API-Maths-Help.html');
        this.HttpContext.response.HTML(fs.readFileSync(helpPagePath));
    }

}
