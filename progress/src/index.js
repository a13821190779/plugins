import progress from './progress.js'

console.log(progress);
document.querySelector('.start').onclick = function() {
	progress.start()
}

document.querySelector('.done').onclick = progress.done

document.querySelector('.moveto').onclick = function() {
	progress.set(0.4)
}

document.querySelector('.moveby').onclick = progress.inc
