export default class selfMode {

    constructor(positions, colors, canvas) {
        const faceLength = positions[6].y - positions[19].y
        const faceWidth = positions[1].x - positions[15].x
        const colorposition = [
            { x: positions[19].x + faceWidth / 10, y: positions[19].y - faceLength / 6 },
            { x: positions[21].x, y: positions[21].y - faceLength / 3 },
            { x: positions[22].x, y: positions[22].y - faceLength / 3 },
            { x: positions[24].x - faceWidth / 10, y: positions[24].y - faceLength / 6 },
            { x: positions[26].x + faceLength / 24, y: positions[26].y - faceLength / 20 },
            // positions[16],
            { x: positions[16].x + faceWidth/30, y: positions[16].y - faceLength / 20 },
            positions[15],
            positions[14],
            positions[13],
            positions[12],
            positions[11],
            positions[9],
            positions[7],
            positions[5],
            positions[4],
            positions[3],
            positions[2],
            positions[1],
            // positions[0],
            { x: positions[0].x - faceWidth/30, y: positions[0].y - faceLength / 20 },
            { x: positions[17].x - faceLength / 24, y: positions[17].y - faceLength / 20 },
            { x: positions[19].x + faceWidth / 10, y: positions[19].y - faceLength / 6 },
        ]
        this.positions = colorposition
        this.colors = colors
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.unit = (canvas.width) / 4
        this.unit2 = (canvas.width) / 6
        this.startPos = { x: this.unit / 2, y: 0 }
        this.drawLoop()
    }

    drawLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (var i = 0; i < 20; i++) {
            this.ctx.beginPath()
            this.ctx.moveTo(this.positions[i].x, this.positions[i].y)
            if (this.startPos.y == 0) {
                if (this.startPos.x + this.unit > this.canvas.width) this.rightTopDraw()
                else this.topDraw()
            }
            else if (this.startPos.x == this.canvas.width) {
                if (this.startPos.y + this.unit2 > this.canvas.height) this.rightBottomDraw()
                else this.rightDraw()
            }
            else if (this.startPos.y == this.canvas.height) {
                if (this.startPos.x - this.unit < 0) this.leftBottomDraw()
                else this.bottomDraw()
            }
            else if (this.startPos.x == 0) {
                if (this.startPos.y - this.unit2 < 0) this.leftTopDraw()
                else this.leftDraw()
            }
            // this.ctx.bezierCurveTo((this.positions[i].x + this.positions[i + 1].x) / 2, this.positions[i + 1].y, this.positions[i].x, (this.positions[i].y + this.positions[i + 1].y) / 2, this.positions[i].x, this.positions[i].y)
            // this.ctx.lineWidth = 100;
            this.ctx.strokeStyle = this.colors[i]
            this.ctx.stroke()
            this.ctx.lineTo(this.positions[i + 1].x, this.positions[i + 1].y)
            this.ctx.fillStyle = this.colors[i]
            this.ctx.fill()
        }
    }

    topDraw() {
        this.ctx.lineTo(this.startPos.x, 0)
        this.startPos.x += this.unit
        this.ctx.lineTo(this.startPos.x, 0)
    }
    bottomDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.startPos.x -= this.unit
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    leftDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.startPos.y -= this.unit2
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    rightDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.startPos.y += this.unit2
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    leftTopDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.ctx.lineTo(0, 0)
        this.startPos.x = this.unit /2
        this.startPos.y = 0
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    rightTopDraw() {
        this.ctx.lineTo(this.startPos.x, 0)
        this.ctx.lineTo(this.canvas.width, 0)
        // this.startPos.y = this.unit - (this.canvas.width - this.startPos.x)
        this.startPos.y = this.unit2 / 2
        this.startPos.x = this.canvas.width
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    leftBottomDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.ctx.lineTo(0, this.canvas.height)
        this.startPos.y = this.canvas.height - (this.unit2/2)
        this.startPos.x = 0
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
    rightBottomDraw() {
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
        this.ctx.lineTo(this.canvas.width, this.canvas.height)
        // this.startPos.x = this.canvas.width - (this.unit - (this.canvas.height - this.startPos.y))
        this.startPos.x = this.canvas.width - (this.unit /2)
        this.startPos.y = this.canvas.height
        this.ctx.lineTo(this.startPos.x, this.startPos.y)
    }
}