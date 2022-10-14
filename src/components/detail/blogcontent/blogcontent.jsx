import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./blogcontent.css";
import { Link } from "react-router-dom";

function Blogcontent() {
    return <div>
        <div className="blog-section">
            <div className="blog-heading">
                <h2 className="blog-heading-h2">Benefits Of ASync/Await In Programming</h2>
            </div>
            <div className="news-post-meta">
                <div className="news-post-meta-item">
                    <AccessTimeIcon
                        color="primary"
                        fontSize="small" />
                    <span>Jan 23, 2021</span>
                </div>
                <div className="news-post-meta-item">
                    <span>by &nbsp;</span>
                    <Link to="#!">Murad Orujov</Link>
                </div>
                <div className="news-post-meta-item">
                    <ChatBubbleIcon
                        color="primary"
                        fontSize="small" />
                    <span>18</span>
                </div>
            </div>
            <div className="news-post-img">
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <article className="news-post-article">
                <p>Whenever I’m TA for a introductory CS class where students learn some programming
                    language, I
                    have trouble coming
                    up with good exercises. Problems from Project Euler and the like are usually much too
                    difficult for beginners,
                    especially if they don’t have a strong background in mathematics.</p>
                <p>This page is a collection of progressively more difficult exercises that are suitable for
                    people who just started
                    learning. It will be extended as I come up with new exercises. Except for the GUI
                    questions,
                    exercises are
                    generally algorithmic and should be solvable without learning any libraries. The
                    difficulty
                    of the exercises of
                    course somewhat depends on the programming language you use. The List exercises for
                    example
                    are more complicated
                    in languages like C that don’t have build-in support for lists.</p>
                <blockquote>Whenever I’m TA for a introductory CS class where students learn some
                    programming
                    language, I have
                    trouble coming up with good exercises. Problems from Project Euler and the like are
                    usually
                    much too difficult
                    for beginners, especially if they don’t have a strong background in mathematics.
                </blockquote>
                <h2>Benefits Of ASync/Await In Programming</h2>
                <p>Learning to program means learning how to solve problems using code. Conceptually it is
                    not
                    very difficult to
                    write a program that solves a problem that you can solve yourself. The skill you need to
                    acquire is thinking
                    very precisely about how you solve the problem and breaking it down into steps that are
                    so
                    simple that a
                    computer can execute them. I encourage you to first solve a few instances of a problem
                    by
                    hand and think about
                    what you did to find the solution. For example if the task is sorting lists, sort some
                    short
                    lists yourself.</p>
                <p>A reasonable method would be to find the smallest element, write it down and cross it out
                    of
                    the original list
                    and repeat this process until you have sorted the whole list. Then you have to teach the
                    computer 1) how to find
                    the smallest element, 2) how to write it down, 3) how to cross it out, and wrap this in
                    a
                    loop. Then continue
                    this task breakdown process until you’re confident you know how to write the necessary
                    program.</p>
                <h3>Benefits Of ASync/Await In Programming</h3>
                <p>To make good progress in your programming task, you need to test your work as early and
                    as
                    thoroughly as
                    possible. Everybody makes mistakes while programming and finding mistakes in programs
                    consumes a very large part
                    of a programmer’s work-day. Finding a problem in a small and easy piece of code is much
                    simpler than trying to
                    spot it in a large program. </p>
                <p>This is why you should try to test each sub task you identified during your
                    task-breakdown by
                    itself. Only after
                    you’re confident that each part works as you expect you can attempt to plug them
                    together.
                    Make sure you test
                    the complete program as well, errors can creep in in the way the different parts
                    interact.
                    You should try to
                    automate your tests. The easier it is to test your program, the freer you are in
                    experimenting with changes.</p>
                <h4>Benefits Of ASync/Await In Programming</h4>
                <p>To make good progress in your programming task, you need to test your work as early and
                    as
                    thoroughly as
                    possible. Everybody makes mistakes while programming and finding mistakes in programs
                    consumes a very large part
                    of a programmer’s work-day. Finding a problem in a small and easy piece of code is much
                    simpler than trying to
                    spot it in a large program. </p>
                <h5>Benefits Of ASync/Await In Programming</h5>
                <p>To make good progress in your programming task, you need to test your work as early and
                    as
                    thoroughly as
                    possible. Everybody makes mistakes while programming and finding mistakes in programs
                    consumes a very large part
                    of a programmer’s work-day. Finding a problem in a small and easy piece of code is much
                    simpler than trying to
                    spot it in a large program. </p>
            </article>
            <footer className="news-post-footer">
                <div className="row-item items">
                    <div className="col-md col-respon-4 col-margin">
                        <ul className="news-post-cat">
                            <li>
                                <Link to="#!">Startup</Link>
                            </li>
                            <li>
                                <Link to="#!">Software Development</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-auto col-respon-4 col-margin">
                        <div className="news-post-share items">
                            <p className="news-post-share-title">Share</p>
                            <ul className="page-social-links">
                                <li>
                                    <Link to="#!" title="Facebook">
                                        <FacebookIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Instagram">
                                        <InstagramIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="LinkedIn">
                                        <LinkedInIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Twitter">
                                        <TwitterIcon />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>;
}

export default Blogcontent;