const artik = require('../lib/artik-sdk');

const name = artik.get_platform_name();

const command_reg = 0x01;
const commien_reg = 0x02;
const cmd_softreset = 0x0f;

if(name == 'Artik 5') {
	console.log('Running SPI test on Artik 5');
	const a5 = require('../src/platform/artik520');
	var pn512 = artik.spi(a5.ARTIK_A10_SPI.BUS.BUS1,
					  a5.ARTIK_A10_SPI.CS.CS0,
					  a5.ARTIK_A10_SPI.MODE.MODE0,
					  a5.ARTIK_A10_SPI.BITS.BITS8,
					  500000);
} else if(name == 'Artik 10') {
	console.log('Running SPI test on Artik 10');
	const a10 = require('../src/platform/artik1020');
	var pn512 = artik.spi(a10.ARTIK_A10_SPI.BUS.BUS1,
						  a10.ARTIK_A10_SPI.CS.CS0,
						  a10.ARTIK_A10_SPI.MODE.MODE0,
						  a10.ARTIK_A10_SPI.BITS.BITS8,
						  500000);
}

function pn512_read_reg(reg){
    reg = ((reg<<1) | 0x80);
	return reg;
}

function pn512_write_reg(reg){
    reg = (reg<<1);
	return reg;
}

if (pn512.request()) {
  console.log('Failed to request pn512');
} else {

  console.log('Send Soft Reset command...');
  var tx_buf = new Buffer([pn512_write_reg(command_reg), cmd_softreset], 'hex');
  var rx_buf = new Buffer([0x0,0x0],'hex');

  var reg = pn512.read_write(tx_buf,rx_buf,2)

  console.log('Reading commien register...');
  tx_buf = new Buffer([pn512_read_reg(commien_reg), 0x0], 'hex');
  rx_buf = new Buffer([0x0,0x0],'hex');
 
  reg = pn512.read_write(tx_buf,rx_buf,2)
  	
  console.log('Value :0x' + Buffer(rx_buf).toString('hex',1,2));


  console.log('Writing 0x11 to commien register...');
  tx_buf = new Buffer([pn512_write_reg(commien_reg), 0x11], 'hex');
  rx_buf = new Buffer([0x0,0x0],'hex');

  reg = pn512.read_write(tx_buf,rx_buf,2)
		
  console.log('Reading commien register...');
  tx_buf = new Buffer([pn512_read_reg(commien_reg), 0x0], 'hex');
  rx_buf = new Buffer([0x0,0x0],'hex');
   
  reg = pn512.read_write(tx_buf,rx_buf,2)

  console.log('Value :0x' + Buffer(rx_buf).toString('hex',1,2));

  pn512.release();
}
