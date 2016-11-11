import 'skatejs-web-components';
import { emit, prop, define, h, Component } from 'skatejs';
const React = { createElemetn: h };

const sym = Symbol('progress');
const styles = `
.progress {
  position: relative;
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff; }
  .progress:after {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    content: ' ';
    background-color: #36474f;
    z-index: 1; }
  .progress > span {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 0;
    top: 0;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 20px;
    text-align: center;
    line-height: 60px;
    font-size: 1rem;
    z-index: 2; }
  .progress.is-small {
    width: 50px;
    height: 50px; }
    .progress.is-small:after {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.1;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      content: ' ';
      background-color: #36474f;
      z-index: 1; }
    .progress.is-small > span {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      margin-left: 10px;
      margin-top: 10px;
      text-align: center;
      line-height: 30px;
      font-size: 0.5rem;
      z-index: 2; }
  .progress.is-green.state-0 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(90deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-1 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(93.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-2 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(97.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-3 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(100.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-4 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(104.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-5 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(108deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-6 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(111.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-7 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(115.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-8 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(118.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-9 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(122.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-10 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(126deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-11 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(129.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-12 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(133.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-13 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(136.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-14 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(140.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-15 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(144deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-16 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(147.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-17 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(151.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-18 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(154.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-19 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(158.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-20 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(162deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-21 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(165.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-22 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(169.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-23 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(172.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-24 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(176.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-25 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(180deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-26 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(183.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-27 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(187.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-28 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(190.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-29 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(194.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-30 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(198deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-31 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(201.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-32 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(205.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-33 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(208.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-34 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(212.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-35 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(216deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-36 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(219.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-37 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(223.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-38 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(226.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-39 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(230.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-40 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(234deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-41 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(237.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-42 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(241.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-43 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(244.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-44 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(248.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-45 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(252deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-46 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(255.6deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-47 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(259.2deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-48 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(262.8deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-49 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(266.4deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-50 {
    background-image: linear-gradient(-90deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-51 {
    background-image: linear-gradient(-86.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-52 {
    background-image: linear-gradient(-82.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-53 {
    background-image: linear-gradient(-79.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-54 {
    background-image: linear-gradient(-75.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-55 {
    background-image: linear-gradient(-72deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-56 {
    background-image: linear-gradient(-68.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-57 {
    background-image: linear-gradient(-64.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-58 {
    background-image: linear-gradient(-61.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-59 {
    background-image: linear-gradient(-57.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-60 {
    background-image: linear-gradient(-54deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-61 {
    background-image: linear-gradient(-50.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-62 {
    background-image: linear-gradient(-46.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-63 {
    background-image: linear-gradient(-43.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-64 {
    background-image: linear-gradient(-39.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-65 {
    background-image: linear-gradient(-36deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-66 {
    background-image: linear-gradient(-32.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-67 {
    background-image: linear-gradient(-28.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-68 {
    background-image: linear-gradient(-25.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-69 {
    background-image: linear-gradient(-21.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-70 {
    background-image: linear-gradient(-18deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-71 {
    background-image: linear-gradient(-14.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-72 {
    background-image: linear-gradient(-10.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-73 {
    background-image: linear-gradient(-7.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-74 {
    background-image: linear-gradient(-3.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-75 {
    background-image: linear-gradient(0deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-76 {
    background-image: linear-gradient(3.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-77 {
    background-image: linear-gradient(7.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-78 {
    background-image: linear-gradient(10.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-79 {
    background-image: linear-gradient(14.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-80 {
    background-image: linear-gradient(18deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-81 {
    background-image: linear-gradient(21.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-82 {
    background-image: linear-gradient(25.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-83 {
    background-image: linear-gradient(28.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-84 {
    background-image: linear-gradient(32.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-85 {
    background-image: linear-gradient(36deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-86 {
    background-image: linear-gradient(39.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-87 {
    background-image: linear-gradient(43.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-88 {
    background-image: linear-gradient(46.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-89 {
    background-image: linear-gradient(50.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-90 {
    background-image: linear-gradient(54deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-91 {
    background-image: linear-gradient(57.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-92 {
    background-image: linear-gradient(61.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-93 {
    background-image: linear-gradient(64.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-94 {
    background-image: linear-gradient(68.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-95 {
    background-image: linear-gradient(72deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-96 {
    background-image: linear-gradient(75.6deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-97 {
    background-image: linear-gradient(79.2deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-98 {
    background-image: linear-gradient(82.8deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-99 {
    background-image: linear-gradient(86.4deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-green.state-100 {
    background-image: linear-gradient(90deg, #66a030 50%, transparent 50%, transparent), linear-gradient(270deg, #66a030 50%, #fff 50%, #fff); }
  .progress.is-orange.state-0 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(90deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-1 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(93.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-2 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(97.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-3 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(100.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-4 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(104.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-5 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(108deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-6 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(111.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-7 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(115.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-8 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(118.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-9 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(122.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-10 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(126deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-11 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(129.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-12 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(133.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-13 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(136.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-14 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(140.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-15 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(144deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-16 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(147.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-17 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(151.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-18 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(154.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-19 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(158.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-20 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(162deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-21 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(165.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-22 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(169.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-23 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(172.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-24 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(176.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-25 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(180deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-26 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(183.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-27 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(187.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-28 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(190.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-29 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(194.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-30 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(198deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-31 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(201.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-32 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(205.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-33 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(208.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-34 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(212.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-35 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(216deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-36 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(219.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-37 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(223.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-38 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(226.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-39 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(230.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-40 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(234deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-41 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(237.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-42 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(241.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-43 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(244.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-44 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(248.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-45 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(252deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-46 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(255.6deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-47 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(259.2deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-48 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(262.8deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-49 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(266.4deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-50 {
    background-image: linear-gradient(-90deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-51 {
    background-image: linear-gradient(-86.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-52 {
    background-image: linear-gradient(-82.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-53 {
    background-image: linear-gradient(-79.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-54 {
    background-image: linear-gradient(-75.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-55 {
    background-image: linear-gradient(-72deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-56 {
    background-image: linear-gradient(-68.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-57 {
    background-image: linear-gradient(-64.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-58 {
    background-image: linear-gradient(-61.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-59 {
    background-image: linear-gradient(-57.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-60 {
    background-image: linear-gradient(-54deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-61 {
    background-image: linear-gradient(-50.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-62 {
    background-image: linear-gradient(-46.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-63 {
    background-image: linear-gradient(-43.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-64 {
    background-image: linear-gradient(-39.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-65 {
    background-image: linear-gradient(-36deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-66 {
    background-image: linear-gradient(-32.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-67 {
    background-image: linear-gradient(-28.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-68 {
    background-image: linear-gradient(-25.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-69 {
    background-image: linear-gradient(-21.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-70 {
    background-image: linear-gradient(-18deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-71 {
    background-image: linear-gradient(-14.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-72 {
    background-image: linear-gradient(-10.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-73 {
    background-image: linear-gradient(-7.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-74 {
    background-image: linear-gradient(-3.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-75 {
    background-image: linear-gradient(0deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-76 {
    background-image: linear-gradient(3.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-77 {
    background-image: linear-gradient(7.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-78 {
    background-image: linear-gradient(10.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-79 {
    background-image: linear-gradient(14.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-80 {
    background-image: linear-gradient(18deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-81 {
    background-image: linear-gradient(21.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-82 {
    background-image: linear-gradient(25.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-83 {
    background-image: linear-gradient(28.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-84 {
    background-image: linear-gradient(32.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-85 {
    background-image: linear-gradient(36deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-86 {
    background-image: linear-gradient(39.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-87 {
    background-image: linear-gradient(43.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-88 {
    background-image: linear-gradient(46.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-89 {
    background-image: linear-gradient(50.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-90 {
    background-image: linear-gradient(54deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-91 {
    background-image: linear-gradient(57.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-92 {
    background-image: linear-gradient(61.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-93 {
    background-image: linear-gradient(64.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-94 {
    background-image: linear-gradient(68.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-95 {
    background-image: linear-gradient(72deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-96 {
    background-image: linear-gradient(75.6deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-97 {
    background-image: linear-gradient(79.2deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-98 {
    background-image: linear-gradient(82.8deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-99 {
    background-image: linear-gradient(86.4deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-orange.state-100 {
    background-image: linear-gradient(90deg, #f16c00 50%, transparent 50%, transparent), linear-gradient(270deg, #f16c00 50%, #fff 50%, #fff); }
  .progress.is-blue.state-0 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(90deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-1 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(93.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-2 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(97.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-3 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(100.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-4 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(104.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-5 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(108deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-6 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(111.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-7 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(115.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-8 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(118.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-9 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(122.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-10 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(126deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-11 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(129.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-12 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(133.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-13 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(136.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-14 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(140.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-15 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(144deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-16 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(147.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-17 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(151.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-18 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(154.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-19 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(158.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-20 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(162deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-21 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(165.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-22 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(169.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-23 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(172.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-24 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(176.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-25 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(180deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-26 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(183.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-27 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(187.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-28 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(190.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-29 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(194.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-30 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(198deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-31 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(201.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-32 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(205.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-33 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(208.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-34 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(212.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-35 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(216deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-36 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(219.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-37 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(223.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-38 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(226.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-39 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(230.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-40 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(234deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-41 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(237.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-42 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(241.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-43 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(244.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-44 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(248.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-45 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(252deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-46 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(255.6deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-47 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(259.2deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-48 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(262.8deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-49 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(266.4deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-50 {
    background-image: linear-gradient(-90deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-51 {
    background-image: linear-gradient(-86.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-52 {
    background-image: linear-gradient(-82.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-53 {
    background-image: linear-gradient(-79.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-54 {
    background-image: linear-gradient(-75.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-55 {
    background-image: linear-gradient(-72deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-56 {
    background-image: linear-gradient(-68.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-57 {
    background-image: linear-gradient(-64.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-58 {
    background-image: linear-gradient(-61.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-59 {
    background-image: linear-gradient(-57.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-60 {
    background-image: linear-gradient(-54deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-61 {
    background-image: linear-gradient(-50.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-62 {
    background-image: linear-gradient(-46.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-63 {
    background-image: linear-gradient(-43.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-64 {
    background-image: linear-gradient(-39.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-65 {
    background-image: linear-gradient(-36deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-66 {
    background-image: linear-gradient(-32.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-67 {
    background-image: linear-gradient(-28.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-68 {
    background-image: linear-gradient(-25.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-69 {
    background-image: linear-gradient(-21.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-70 {
    background-image: linear-gradient(-18deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-71 {
    background-image: linear-gradient(-14.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-72 {
    background-image: linear-gradient(-10.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-73 {
    background-image: linear-gradient(-7.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-74 {
    background-image: linear-gradient(-3.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-75 {
    background-image: linear-gradient(0deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-76 {
    background-image: linear-gradient(3.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-77 {
    background-image: linear-gradient(7.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-78 {
    background-image: linear-gradient(10.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-79 {
    background-image: linear-gradient(14.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-80 {
    background-image: linear-gradient(18deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-81 {
    background-image: linear-gradient(21.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-82 {
    background-image: linear-gradient(25.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-83 {
    background-image: linear-gradient(28.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-84 {
    background-image: linear-gradient(32.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-85 {
    background-image: linear-gradient(36deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-86 {
    background-image: linear-gradient(39.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-87 {
    background-image: linear-gradient(43.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-88 {
    background-image: linear-gradient(46.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-89 {
    background-image: linear-gradient(50.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-90 {
    background-image: linear-gradient(54deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-91 {
    background-image: linear-gradient(57.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-92 {
    background-image: linear-gradient(61.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-93 {
    background-image: linear-gradient(64.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-94 {
    background-image: linear-gradient(68.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-95 {
    background-image: linear-gradient(72deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-96 {
    background-image: linear-gradient(75.6deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-97 {
    background-image: linear-gradient(79.2deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-98 {
    background-image: linear-gradient(82.8deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-99 {
    background-image: linear-gradient(86.4deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-blue.state-100 {
    background-image: linear-gradient(90deg, #1c99a5 50%, transparent 50%, transparent), linear-gradient(270deg, #1c99a5 50%, #fff 50%, #fff); }
  .progress.is-gold.state-0 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(90deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-1 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(93.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-2 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(97.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-3 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(100.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-4 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(104.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-5 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(108deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-6 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(111.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-7 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(115.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-8 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(118.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-9 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(122.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-10 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(126deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-11 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(129.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-12 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(133.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-13 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(136.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-14 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(140.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-15 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(144deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-16 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(147.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-17 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(151.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-18 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(154.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-19 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(158.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-20 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(162deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-21 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(165.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-22 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(169.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-23 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(172.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-24 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(176.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-25 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(180deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-26 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(183.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-27 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(187.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-28 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(190.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-29 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(194.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-30 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(198deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-31 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(201.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-32 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(205.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-33 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(208.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-34 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(212.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-35 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(216deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-36 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(219.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-37 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(223.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-38 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(226.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-39 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(230.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-40 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(234deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-41 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(237.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-42 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(241.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-43 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(244.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-44 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(248.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-45 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(252deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-46 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(255.6deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-47 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(259.2deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-48 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(262.8deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-49 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(266.4deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-50 {
    background-image: linear-gradient(-90deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-51 {
    background-image: linear-gradient(-86.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-52 {
    background-image: linear-gradient(-82.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-53 {
    background-image: linear-gradient(-79.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-54 {
    background-image: linear-gradient(-75.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-55 {
    background-image: linear-gradient(-72deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-56 {
    background-image: linear-gradient(-68.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-57 {
    background-image: linear-gradient(-64.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-58 {
    background-image: linear-gradient(-61.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-59 {
    background-image: linear-gradient(-57.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-60 {
    background-image: linear-gradient(-54deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-61 {
    background-image: linear-gradient(-50.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-62 {
    background-image: linear-gradient(-46.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-63 {
    background-image: linear-gradient(-43.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-64 {
    background-image: linear-gradient(-39.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-65 {
    background-image: linear-gradient(-36deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-66 {
    background-image: linear-gradient(-32.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-67 {
    background-image: linear-gradient(-28.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-68 {
    background-image: linear-gradient(-25.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-69 {
    background-image: linear-gradient(-21.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-70 {
    background-image: linear-gradient(-18deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-71 {
    background-image: linear-gradient(-14.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-72 {
    background-image: linear-gradient(-10.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-73 {
    background-image: linear-gradient(-7.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-74 {
    background-image: linear-gradient(-3.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-75 {
    background-image: linear-gradient(0deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-76 {
    background-image: linear-gradient(3.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-77 {
    background-image: linear-gradient(7.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-78 {
    background-image: linear-gradient(10.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-79 {
    background-image: linear-gradient(14.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-80 {
    background-image: linear-gradient(18deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-81 {
    background-image: linear-gradient(21.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-82 {
    background-image: linear-gradient(25.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-83 {
    background-image: linear-gradient(28.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-84 {
    background-image: linear-gradient(32.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-85 {
    background-image: linear-gradient(36deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-86 {
    background-image: linear-gradient(39.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-87 {
    background-image: linear-gradient(43.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-88 {
    background-image: linear-gradient(46.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-89 {
    background-image: linear-gradient(50.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-90 {
    background-image: linear-gradient(54deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-91 {
    background-image: linear-gradient(57.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-92 {
    background-image: linear-gradient(61.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-93 {
    background-image: linear-gradient(64.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-94 {
    background-image: linear-gradient(68.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-95 {
    background-image: linear-gradient(72deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-96 {
    background-image: linear-gradient(75.6deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-97 {
    background-image: linear-gradient(79.2deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-98 {
    background-image: linear-gradient(82.8deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-99 {
    background-image: linear-gradient(86.4deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-gold.state-100 {
    background-image: linear-gradient(90deg, #ff9000 50%, transparent 50%, transparent), linear-gradient(270deg, #ff9000 50%, #fff 50%, #fff); }
  .progress.is-red.state-0 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(90deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-1 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(93.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-2 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(97.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-3 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(100.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-4 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(104.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-5 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(108deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-6 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(111.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-7 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(115.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-8 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(118.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-9 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(122.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-10 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(126deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-11 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(129.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-12 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(133.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-13 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(136.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-14 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(140.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-15 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(144deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-16 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(147.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-17 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(151.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-18 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(154.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-19 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(158.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-20 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(162deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-21 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(165.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-22 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(169.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-23 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(172.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-24 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(176.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-25 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(180deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-26 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(183.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-27 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(187.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-28 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(190.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-29 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(194.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-30 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(198deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-31 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(201.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-32 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(205.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-33 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(208.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-34 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(212.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-35 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(216deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-36 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(219.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-37 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(223.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-38 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(226.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-39 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(230.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-40 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(234deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-41 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(237.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-42 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(241.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-43 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(244.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-44 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(248.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-45 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(252deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-46 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(255.6deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-47 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(259.2deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-48 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(262.8deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-49 {
    background-image: linear-gradient(90deg, #fff 50%, transparent 50%, transparent), linear-gradient(266.4deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-50 {
    background-image: linear-gradient(-90deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-51 {
    background-image: linear-gradient(-86.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-52 {
    background-image: linear-gradient(-82.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-53 {
    background-image: linear-gradient(-79.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-54 {
    background-image: linear-gradient(-75.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-55 {
    background-image: linear-gradient(-72deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-56 {
    background-image: linear-gradient(-68.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-57 {
    background-image: linear-gradient(-64.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-58 {
    background-image: linear-gradient(-61.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-59 {
    background-image: linear-gradient(-57.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-60 {
    background-image: linear-gradient(-54deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-61 {
    background-image: linear-gradient(-50.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-62 {
    background-image: linear-gradient(-46.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-63 {
    background-image: linear-gradient(-43.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-64 {
    background-image: linear-gradient(-39.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-65 {
    background-image: linear-gradient(-36deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-66 {
    background-image: linear-gradient(-32.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-67 {
    background-image: linear-gradient(-28.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-68 {
    background-image: linear-gradient(-25.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-69 {
    background-image: linear-gradient(-21.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-70 {
    background-image: linear-gradient(-18deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-71 {
    background-image: linear-gradient(-14.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-72 {
    background-image: linear-gradient(-10.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-73 {
    background-image: linear-gradient(-7.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-74 {
    background-image: linear-gradient(-3.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-75 {
    background-image: linear-gradient(0deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-76 {
    background-image: linear-gradient(3.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-77 {
    background-image: linear-gradient(7.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-78 {
    background-image: linear-gradient(10.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-79 {
    background-image: linear-gradient(14.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-80 {
    background-image: linear-gradient(18deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-81 {
    background-image: linear-gradient(21.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-82 {
    background-image: linear-gradient(25.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-83 {
    background-image: linear-gradient(28.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-84 {
    background-image: linear-gradient(32.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-85 {
    background-image: linear-gradient(36deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-86 {
    background-image: linear-gradient(39.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-87 {
    background-image: linear-gradient(43.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-88 {
    background-image: linear-gradient(46.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-89 {
    background-image: linear-gradient(50.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-90 {
    background-image: linear-gradient(54deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-91 {
    background-image: linear-gradient(57.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-92 {
    background-image: linear-gradient(61.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-93 {
    background-image: linear-gradient(64.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-94 {
    background-image: linear-gradient(68.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-95 {
    background-image: linear-gradient(72deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-96 {
    background-image: linear-gradient(75.6deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-97 {
    background-image: linear-gradient(79.2deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-98 {
    background-image: linear-gradient(82.8deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-99 {
    background-image: linear-gradient(86.4deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
  .progress.is-red.state-100 {
    background-image: linear-gradient(90deg, #cf1102 50%, transparent 50%, transparent), linear-gradient(270deg, #cf1102 50%, #fff 50%, #fff); }
`;

const Progress = define('sk-progress', class extends Component {
  static get props() {
    return {
      status: prop.number({
        attribute: true,
        default: 0,
      }),
      color: prop.string({
        attribute: true,
        default: 'green',
      }),
      endless: prop.boolean({
        attribute: true,
        default: false,
      }),
    };
  }

  static render(elem) {
    const value = elem.status;

    emit(elem, 'change', {
      detail: {
        data: value,
      },
    });

    return (
      <div className={`progress is-${elem.color} state-${value}`}>
        <style>{styles}</style>
        <span>{`${value}%`}</span>
      </div>
    );
  }

});

export default Progress;
