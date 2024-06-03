import React ,{useEffect} from "react";
import {motion} from "framer-motion";
import img1 from "./ArmCircuit.jpg";
import img3 from "./Armpic1.png";
import Comment from '../comment/index.js'
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, [])
  return (
    <div id='rob'className="card w-full snap-x glass lg:p-16">
      <figure className="snap-center">
        <motion.img  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="max-h-56 rounded my-2 mix-blend-darken w-fit bg-blue-400"
          src='https://sklc-tinymce-2021.s3.amazonaws.com/2020/10/robot-kol-animasyon_1602321157.gif'
          height={100}
          width={100}
          alt="car!"
        />
      </figure>
      <div className="card-body snap-center snap-x">
        <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }} viewport={{once:true}}
          transition={{ duration: 0.5 }} className="card-title underline font-bold">
          Smartphone Controlled Programmable Robotic Arm [ Minor Project (B.Tech
          3rd Sem )]
        </motion.h2>
        <motion.p  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} >
          Robotic arms are now used in a wide variety of applications, from
          industrial automation to automatic burger making arms. The key
          component of any automatic robotic arm is its ability to learn motions
          or the ability of arms to be programmable by the user. This usually
          involves programming the arm each time with set of instructions to be
          followed.
        </motion.p>
        <motion.p  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
          Well we hereby develop a smartphone controlled programmable robotic
          arm that can be easily programmed via a smartphone to perform any
          automated repetitive tasks as desired by user. The arm makes use of 4
          motors controlled by an arduino Uno to achieve the task
        </motion.p>
        <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="card-title font-bold underline">
          This Arduino Powered arm provides the following advantages:
        </motion.h2>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>DOF arm for 360° Movements</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Programmable Arm as per user automation process</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
            Smartphone controlled system with no added programming hardware
            needed
          </motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
            Easy to control movements with sliders instead of complicated
            programming
          </motion.li>
        
        <motion.p  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
          The 4 Dof arm makes use of 4 motors controlled by an arduino Uno
          controller. The controller is interfaced with a Bluetooth receiver
          that is used to receive commands via the android app. The arm gripper
          is made up of 2 claws which are also controlled by a servo motor. The
          gripper angle is also be rotated by another servo for a 180°
          orientation to pick up and place objects of any orientation. The
          android app consists of an easy to use gui with sliders used to
          transmit servo movement commands. The user can record steps and save
          each step through the app. The programming commands transmitted by app
          are received by the Bluetooth receiver and passed over to arduino
          controller. The controller records movement commands of each servo
          step and saves it. The controller can now repeat the set of steps so
          as to execute the entire movement command with desired coordination
          with each servo to achieve the program repetitively.
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
            Thus the system provides a smart mechanism to use a 360°
            programmable robotic arm with smartphone controlled system.
          </motion.li>
        </motion.p>
        <div className="snap-center">
          <motion.h3  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-center underline font-bold text-3xl text-black underline-offset-1">
            Circuit Diagram
          </motion.h3>
          <motion.img  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
            className="snap-center w-fit rounded my-2 justi mx-auto max-h-96 "
            src={img1}
            height={100}
            width={100}
            alt="Circuit Diagram"
          />
        </div>
        <motion.h3  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-black font-bold underline">Components:</motion.h3>
        
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Arduino Uno</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Gear Motors</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Motor Driver Shield</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Bluetooth module</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Base Frame</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Gripper Claws</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Supporting Frame</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Cables and Connectors</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>PCB and Breadboards</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Transformer/Adapter</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Push Buttons</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Switch</motion.li>
        
        <div className=" snap-center">
          <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-black text-center py-1 font-bold underline">Software Specifications</motion.h2>
          <motion.h3   initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-center font-bold ">Programming Language: C</motion.h3>
          <motion.h4  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-black font-bold underline" >Arduino code</motion.h4>
          <pre className="bg-inherit">
            {`
 #include <AFMotor.h>
    AF_DCMotor motor1(1);
    AF_DCMotor motor2(2);
   AF_DCMotor motor3(3);
 AF_DCMotor motor4(4);               
 int Speed = 230;
 char value;
 void setup() {
 Serial.begin(9600);
 motor1.setSpeed(Speed);
motor2.setSpeed(Speed);
 motor3.setSpeed(Speed);
  motor4.setSpeed(Speed);
  }               
void loop() {
if (Serial.available() > 0) {
value = Serial.read();
                    }
if (value == 'F') {
motor1.run(FORWARD);
motor2.run(RELEASE);
motor3.run(RELEASE);
motor4.run(RELEASE);
} else if (value == 'B') {
motor1.run(BACKWARD);
motor2.run(RELEASE);
motor3.run(RELEASE);
motor4.run(RELEASE);
} else if (value == 'L') {
motor1.run(RELEASE);
motor2.run(BACKWARD);
motor3.run(RELEASE);
motor4.run(RELEASE);
} else if (value == 'R') {
motor1.run(RELEASE);
motor2.run(FORWARD);
motor3.run(RELEASE);
motor4.run(RELEASE);
} else if (value == 'G') {
motor1.run(RELEASE);
motor3.run(FORWARD);
motor2.run(RELEASE);
motor4.run(RELEASE);
} else if (value == 'I') {
motor1.run(RELEASE);
motor2.run(RELEASE);
motor3.run(BACKWARD);
motor4.run(RELEASE);
} else if (value == 'H') {
motor1.run(RELEASE);
motor2.run(RELEASE);
motor3.run(RELEASE);
motor4.run(FORWARD);
} else if (value == 'J') {
motor1.run(RELEASE);
motor2.run(RELEASE);
motor3.run(RELEASE);
motor4.run(BACKWARD);
} else {
motor1.run(RELEASE);
motor2.run(RELEASE);
motor3.run(RELEASE);
motor4.run(RELEASE);
} } `}
</pre>
        </div>
        <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-center font-bold text-2xl underline">Application</motion.h2>
        <div className="mx-auto my-5">
          
        <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}> Production Lines Automation</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Automated Cooking Robots</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Fruit/Vegetable Sorting Robots</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Wall Painting Robots</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Medical/Surgical Operation Robotics</motion.li>
        </div>
    
        <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}className="text-center font-bold underline text-2xl">Advantages :</motion.h2>
        <div className="mx-auto my-5">
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>4 DOF arm for 360° Movements</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>Programmable Arm as per user automation process</motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
            Smartphone controlled system with no added programming hardware
            needed
          </motion.li>
          <motion.li  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}>
            Easy to control movements with sliders instead of complicated
            programming
          </motion.li>
        </div>
        <motion.h3  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} className="text-center font-bold underline text-3xl">Block Diagram</motion.h3>
        <motion.img  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className=" w-fit snap-center mx-auto rounded max-h-96 "
          src={img3}
          height={100}
          width={100}
        />

        <div className="w-full"><Comment/></div>
      </div>
    </div>
  );
};

export default Index;
