import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    public getData(link: string, args?: string): Observable<any> {
        switch (link) {
            case 'home': {

            }
            case 'biography': {
                return Observable.of({
                    sections: [
                        { text: 'Hi, my name is Ante. I\'m a software engineer from Zagreb, Croatia.' },
                        {
                            text: `Beleave it or not I didn\'t always want to be an engineer, 
                            or have anything to do with coding for that matter.
                            The first time I ever encountered a proper piece of code was when I started
                            my studies on University of Zagreb, Mathematics department back in 2012.
                            It was very scary at first, I can remember even now how much I failed at my first
                            encounter with C. Now, only 5 years later, I am able to deploy entire systems by
                            myself, have knowledge of a wide range of programming languages and technologies
                            and the will to learn and progress even further.`
                        },
                        {
                            text: `When I was young I was always entreegued with technology it's true, but I
                            never imaged myself as an engineer. I was just like all other kids wanting to be
                            an astronout (space explorer) or a wizard. One thing that I liked the most is solving
                            puzzles or rather to say 'problems'. In my spare time I mostly played with Legos but I
                            never built stuff by official design and instead had a big box full of parts and let my
                            imagination do the rest.`
                        },
                        {
                            text: `I started University with the goal to be a Mathematician, but I had no clue 
                            what that really ment. After just first year I realized that's not for me, too much philosophy,
                            theorems and axioms. But I did find something in programming, so I decided to jump to a different
                            department of Engineering and Computing. Here I loved it, after first semester I even got employed
                            as a Junior Software Engineer because I wanted to learn more, not just the theory but the practical
                            applications aswell. After 2 years of working and studying I got burnt out, the University obligations
                            took their toll on me and I had to change something. Since I passed all possible IT-related subjects and
                            only ones left were subjects like Electronics, Electrotechnics which I found super boring I decided to
                            cross over one more (last) time to University of Information Technology. I didn't learn many new things
                            but at least it allowed me to work full-time, now I'm finally graduating and being able to focus solely 
                            on my proffesional career.`
                        },
                        {
                            text: `Solving problems is probably one of my biggest passions (along with coding), that
                            feeling when you solve something feels really good and it's one of the best ways to learn.
                            The way I learned how to swim is that my parents threw me in the water, it wasn't deep but
                            deep enough that I couldn't stand so my only option was to adapt and figure it out myself.
                            Ofcourse they were right next to me in case something bad happened but the point is they
                            made me find the solution myself.`
                        },
                        {
                            text: `Proactivity is one of the main attributes of a good software engineer, or at least in
                            my opinion. People often say to me that I'm trying to become a 'jack-of-all-trades' when it comes
                            to software development since I tend to learn a wide variety of different languages and technologies
                            in my spare time. Sometimes I write some projects in those technologies and other times just read up
                            on them but no knowledge is useless knowledge. The speed we're advancing in technology is exponentially 
                            increasing, I'm fairly young in IT sector but even I can feel it, new libraries, languages and software 
                            coming out every few months. Developers NEED to constantly evolve and learn new technologies if they don't
                            want to fall behind the curve, if they do, they'll never be able to catch it . . .`
                        }
                    ]
                })
            }
        }

        return Observable.of({});
    }
}