//#pragma strict
var speed: float;
var rotSen: int =100;
var dodgeSpeedMult: float;
var isMoving: boolean;
var canRotCam: boolean;
var isDodging: boolean;
var dodgeTime: float;
var dodgeDistance: float;

function Start () {
canRotCam=true;

}

function FixedUpdate () {

if(Input.GetKeyDown(KeyCode.Space))
isDodging=true;

var upDown : float = Input.GetAxis ("Vertical");
var leftRight  : float = Input.GetAxis ("Horizontal");

if((upDown!=0 || leftRight!=0) && !isMoving)
{isMoving=true;
GetComponentInChildren(Animator).SetTrigger("isMoving");
}
if(upDown==0 && leftRight==0 && isMoving)
{isMoving=false;
GetComponentInChildren(Animator).ResetTrigger("isMoving");
}

if(isDodging)
transform.position=Mathf
upDown*=speed;
leftRight*=speed;

upDown*=Time.deltaTime;
leftRight*=Time.deltaTime;



if(!isDodging)
transform.Translate (leftRight, 0,upDown );


if(canRotCam)
{ var workingRotSen: float = rotSen/100;
var rotX : float = Input.GetAxis ("Mouse X") *workingRotSen;
 var rotY : float = Input.GetAxis ("Mouse Y") *workingRotSen;
transform.Rotate(0,rotX-rotY,0);
}

}

function checkMove() 
{
	if(!isDodging)
		return(true);
	else
		return(false);
}

function doDodge()
{
isDodging=false;
}