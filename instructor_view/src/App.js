import { useState, useEffect } from 'react';
import { lectureList } from './lecture-list.js';
import { questionList } from './question-list.js';
import Statistics from './video-stats.js';
import Radar from './radar.js';

var currentLecture = 0;

function Curtain() {
  return (
    <div className='Curtain' id='Curtain'>
    </div>
  );
}

function showCurtain(isCurtainShown) {
  document.getElementById("Curtain").style.display = isCurtainShown == "true" ? "block" : "none";
}

function TopNavBar() {
  return (
    <div className='TopNavBar'>
      <div style={({ float: "left" })}>
        <div className='TopNavBarItem'>Instructor View</div>
      </div>
      <span style={({ width: 545 })}></span>
      <div style={({ float: "right", display: "flex", flexDirection: "row" })}>
        <div className='TopNavBarItem'>Your courses</div>
        <div className='TopNavBarItem'>Account</div>
      </div>
    </div>
  );
}

function CourseCode() {
  return (
    <div style={({ fontSize: 30 })}>
      CS231n
    </div>
  );
}

function LectureCollection() {
  const listLectures = lectureList.map(lecture =>
    <li onClick={() => { currentLecture = lecture.id; window.alert("Showing Lecture " + lecture.id); }}>{lecture.title}</li>
  );
  return (
    <div className='LectureCollection'>
      <ul>{listLectures}</ul>
    </div>
  );
}

function LectureUploadBtn() {
  return (
    <button className='LectureUploadBtn' onClick={() => { showLectureUploadDialog("true"); showCurtain("true"); }}>
      Upload lecture
    </button>
  );
}

function LectureUploadDialog() {
  return (
    <div className='LectureUploadDialog' id='LectureUploadDialog'>
      <center>Add lecture</center>
      <br />
      <form id="ChatInput">
        Title
        <input id="InputLectureTitle" width={5}></input>
        <br />
        Link
        <input id="InputLectureLink" width={5}></input>
        <br />
        Upload
        <input className='LectureUploadBtn' type='file' accept='.mp4,.pdf,.ppt,.pptx'></input>
        <br />
        <center><input className='LectureUploadBtn' type="button" value="Add" onClick={() => { showLectureUploadDialog("false"); showCurtain("false"); }}></input></center>
      </form>
    </div>
  );
}

function showLectureUploadDialog(isLectureUploadDialogShown) {
  document.getElementById("LectureUploadDialog").style.display = isLectureUploadDialogShown == "true" ? "block" : "none";
}

function VideoBox() {
  const listVideos = lectureList.map(lecture =>
    <div className='VideoBox' key={lecture.id}>
      <iframe className='VideoBox' src={lecture.link} scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
  );
  return (
    <>
      {listVideos[currentLecture]}
    </>
  );
}

function VideoStatsSwitch() {
  return (
    <div className='VideoStatsSwitch'>
      <button className='VideoStatsBtn' onClick={() => switchVideoStats(1)}>Questions</button> <button className='VideoStatsBtn' onClick={() => switchVideoStats(2)}>Performance</button>
    </div>
  );
}

function VideoStats() {
  return (
    <div className='VideoStats'>
      <div className='Statistics' id='Statistics'><Statistics /></div>
      <div className='Radar' id='Radar'><Radar /></div>
    </div>
  );
}

function switchVideoStats(pageNo) {
  if (pageNo == 1) {
    document.getElementById("Statistics").style.display = "block";
    document.getElementById("Radar").style.display = "none";
  }
  else {
    document.getElementById("Statistics").style.display = "none";
    document.getElementById("Radar").style.display = "block";
  }
}

function QuestionList() {
  const listQuestions = questionList.map(question =>
    <div className='ListedQuestion' key={question.id}>
      <span class='QuestionTime'>{question.time}</span><b>Question {question.id}</b>
      <span style={({ height: 10 })}> </span>
      {question.content}
      <span style={({ height: 10 })}> </span>
      <button className='AnswerBtn' onClick={() => showAnswerInterface(question.id - 1, "true")}>Write answer</button>
      <span style={({ height: 10 })}> </span>
      <div className='AnswerInterface'>
        <form>
          <textarea rows={3} cols={63}></textarea>
          <br />
          <input className='AnswerBtn' type='button' value='Send' onClick={() => showAnswerInterface(question.id - 1, "false")}></input>
        </form>
      </div>
    </div >
  );
  return (
    <ul>{listQuestions}</ul>
  );
}

function showAnswerInterface(questionId, isAnswerInterfaceShown) {
  document.getElementsByClassName("AnswerInterface")[questionId].style.display = isAnswerInterfaceShown == "true" ? "block" : "none";
}

function QuestionBox() {
  return (
    <div>
      <QuestionList />
    </div>
  );
}

/* Generate webpage */

export default function Page() {
  return (
    <>
      <Curtain />
      <TopNavBar />
      <div className='UpperLeftCourseCode'>
        <CourseCode />
        <div>Dashboard</div>
      </div>
      <div style={({ display: "flex", flexDirection: "row" })}>
        <div style={({ display: "flex", flexDirection: "column" })}>
          <LectureCollection />
          <LectureUploadBtn />
          <LectureUploadDialog />
        </div>
        <div style={({ display: "flex", flexDirection: "column" })}>
          <VideoBox />
          <VideoStatsSwitch />
          <VideoStats />
          <QuestionBox />
        </div>
      </div>
    </>
  );
}