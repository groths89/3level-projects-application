import React, { lazy, Suspense } from 'react';
//import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header';
import Progress from './components/Progress';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingLazy = lazy(() => import('./components/LandingApp'))
const DigitalClockLazy = lazy(() => import('./components/DigitalClockApp'))
const RecipesLazy = lazy(() => import('./components/RecipesApp'))
const TimesTableLazy = lazy(() => import('./components/TimesTableGeneratorApp'))
const PalindromeLazy = lazy(() => import('./components/PalindromeCheckerApp'))
const RockPaperScissorsLazy = lazy(() => import('./components/RockPaperScissorsApp'))
const WhackAMoleLazy = lazy(() => import('./components/WhackAMoleApp'))
const MemoryLazy = lazy(() => import('./components/MemoryGameApp'))
const ConnectFourLazy = lazy(() => import('./components/ConnectFourGameApp'))
const SpaceInvadersLazy = lazy(() => import('./components/SpaceInvadersGameApp'))
const FroggerLazy = lazy(() => import('./components/FroggerGameApp'))
const BreakoutLazy = lazy(() => import('./components/BreakoutGameApp'))
const WordleLazy = lazy(() => import('./components/WordleGameApp')) 
const CalcLazy = lazy(() => import('./components/CalculatorApp'))

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<Progress />}>
                <Routes>
                    <Route path='calculator' element={<CalcLazy />} />
                    <Route path='wordle' element={<WordleLazy />} />
                    <Route path='breakout' element={<BreakoutLazy />} />
                    <Route path='frogger' element={<FroggerLazy />} />
                    <Route path='spaceinvaders' element={<SpaceInvadersLazy />} />
                    <Route path='connectfour' element={<ConnectFourLazy />} />
                    <Route path='memory' element={<MemoryLazy />} />
                    <Route path='whackamole' element={<WhackAMoleLazy />} />
                    <Route path='rockpaperscissors' element={<RockPaperScissorsLazy />} />
                    <Route path='palindrome' element={<PalindromeLazy />} />
                    <Route path='timestablegenerator' element={<TimesTableLazy />} />
                    <Route path='recipes' element={<RecipesLazy />} />
                    <Route path='digitalclock' element={<DigitalClockLazy />} />
                    <Route path="/" element={<LandingLazy/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}