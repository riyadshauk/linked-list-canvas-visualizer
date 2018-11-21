import { ListNode, LinkedList } from './list.js';
import { drawArrow } from './helpers.js';

const initList = () => {
  const list = new LinkedList();
  for (let i = 0; i < 100; i++) {
    list.insert(`node ${i}`);
  }
  return list;
};

let list = initList();
let lastWidth = window.innerWidth, lastHeight = window.innerHeight;

const resizeCanvas = () => {
  const canvas = document.getElementById('linked-list');
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  drawList(list);
};

const drawList = (list) => {
  const canvas = document.getElementById('linked-list');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, lastWidth, lastHeight);
  lastWidth = ctx.canvas.width;
  lastHeight = ctx.canvas.height;
  const nodeWidth = 150;
  const nodeHeight = 100;
  list.forEach((node, idx) => {
    const curX = ((nodeWidth + 40) * idx) % (ctx.canvas.width - nodeWidth);
    const curY = 40 + Math.floor(((nodeWidth + 40) * idx + 0) / (ctx.canvas.width - nodeWidth)) * (nodeHeight + 20);
    ctx.fillText(node.val, curX, curY);
    console.log('node.val:', node.val);
    ctx.fillStyle = 'blue';
    ctx.fillRect(curX, curY, nodeWidth, nodeHeight);
    drawArrow(ctx, curX + nodeWidth, curY + nodeHeight / 2, curX + nodeWidth + 30, curY + nodeHeight / 2);
  });
};

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
drawList(list);