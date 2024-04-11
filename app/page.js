import Image from "next/image";

export default function Home() {
  return (
    <body style={{ backgroundColor: "black", color: "white" }}>
      <table border={0} cellSpacing={0}>
        <tr>
          <td width={40}>
            <button class="moreoptions"></button>
          </td>
          <td width={140}>
            <button class="youtube"></button>
          </td>
          <td width={830}>
            <input type="text" class="searchinput" placeholder="Search" style={{ marginLeft: "290px" }} /><button class="search" style={{ verticalAlign: "middle" }}></button>
          </td>
          <td width={300}>
            <button class="mic"></button>
          </td>
          <td>
            <button class="create"></button>
          </td>
          <td>
            <button class="notification"></button>
          </td>
          <td>
            <button class="profile"></button>
          </td>
        </tr>
      </table>
      <table border={0} cellSpacing={0}>
        <tr>
          <td>
            <table border={0} cellSpacing={0} frame="void" rules="rows">
              <tr>
                <table border={0} cellSpacing={0}>
                  <tr>
                    <td width={40}>
                      <button class="home"></button>
                    </td>
                    <td width={140}>
                      Home
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="shorts"></button>
                    </td>
                    <td>
                      Shorts
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="subscribe"></button>
                    </td>
                    <td>
                      Subscription
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td>
                  <button class="rightarrow"><b>You</b></button>
                  <table border={0} cellSpacing={0}>
                    <tr>
                      <td width={40}>
                        <button class="history"></button>
                      </td>
                      <td width={140}>
                        History
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="watchlater"></button>
                      </td>
                      <td>
                        Watch later
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="like"></button>
                      </td>
                      <td>
                        Liked videos
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <button class="title"><b>Explore</b></button>
                  <table border={0} cellSpacing={0}>
                    <tr>
                      <td width={40}>
                        <button class="trending2"></button>
                      </td>
                      <td width={140}>
                        Trending
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="music"></button>
                      </td>
                      <td>
                        Music
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="gaming"></button>
                      </td>
                      <td>
                        Gaming
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="news"></button>
                      </td>
                      <td>
                        News
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="sport"></button>
                      </td>
                      <td>
                        Sport
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <button class="title"><b>More from YouTube</b></button>
                  <table border={0} cellSpacing={0}>
                    <tr>
                      <td width={40}>
                        <button class="youtubepremium"></button>
                      </td>
                      <td width={140}>
                        YouTube Premium
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="youtubemusic"></button>
                      </td>
                      <td>
                        YouTube Music
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button class="youtubekids"></button>
                      </td>
                      <td>
                        YouTube Kids
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <table border={0} cellSpacing={0}>
                  <tr>
                    <td width={40}>
                      <button class="setting"></button>
                    </td>
                    <td width={140}>
                      Setting
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="report"></button>
                    </td>
                    <td>
                      Report history
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="help"></button>
                    </td>
                    <td>
                      Help
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="comment"></button>
                    </td>
                    <td>
                      Send feedback
                    </td>
                  </tr>
                </table>
              </tr>
            </table>
          </td>
          <td style={{ verticalAlign: "top" }}>
            <table border={0} cellSpacing={0}>
              <tr>
                <td width={150}></td>
                <td>
                  <button class="trending1"><b>Trending</b></button>
                </td>
              </tr>
            </table>
            <table border={0} cellSpacing={0} frame="void" rules="rows">
              <tr>
                <td width={150} height={45}></td>
                <td width={50} align="center" class="selected">Now</td>
                <td width={60} align="center" style={{color:"#b2b2b2"}}>Music</td>
                <td width={70} align="center" style={{color:"#b2b2b2"}}>Gaming</td>
                <td width={80} align="center" style={{color:"#b2b2b2"}}>Movies</td>
                <td width={426}></td>
                <td width={406}></td>
              </tr>
              <tr></tr>
            </table>
            <table border={0} cellSpacing={0}>
              <tr style={{ verticalAlign: "top" }}>
                <td width={150} height={160}></td>
                <td style={{verticalAlign:"middle"}}><img src="/images/clip1.png" width={240} /></td>
                <td width={460}>
                  <p style={{ fontSize: "13px" }}>
                    การแข่งขัน RoV Pro League 2024 Summer | รอบ Regular Season วัน<br />สุดท้าย
                  </p>
                  <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
                    Garena Rov Thailand <img src="/images/verify.png" width={9} /> 1M views・Streamed 20 hours ago
                  </p>
                  <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
                    การแข่งขัน Rov Pro League 2024 Summer🏆 วันสุดท้ายของรอบ Regular Season(เก็บคะแนน)🏆งานออฟไลน์<br />รอ...
                  </p>
                </td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td width={150} height={160}></td>
                <td style={{verticalAlign:"middle"}}><img src="/images/clip2.png" width={240} /></td>
                <td width={455}>
                  <p style={{ fontSize: "13px" }}>
                    สวยขยี้ใจ - บ่าวบุ๊ค x ทิดแอม x คำมอส #อัลบั้มละไว้ในฐานที่เข้าใจ<br /> [OFFICIAL MV]
                  </p>
                  <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
                    บังเอิญ มิวสิค・3.6M views・3 days ago
                  </p>
                  <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
                    เพลง : สวยขยี้ใจ ศิลปิน : บุ๊ค ศุภกาญจน์,ทิดแอม,มอส คำหมากบิน คำร้อง/ทำนอง...
                  </p>
                </td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td width={150} height={160}></td>
                <td style={{verticalAlign:"middle"}}><img src="/images/clip3.png" width={240} /></td>
                <td width={455}>
                  <p style={{ fontSize: "13px" }}>
                    ผม vs แฟนตอนไปทะเล 😂😂
                  </p>
                  <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
                    Eoirndaime <img src="/images/verify.png" width={9} /> 498K views・2 days ago
                  </p>
                </td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td width={150} height={160}></td>
                <td style={{verticalAlign:"middle"}}><img src="/images/clip4.png" width={240} /></td>
                <td width={455}>
                  <p style={{ fontSize: "13px" }}>
                    Girl Are Strong Too 💪
                  </p>
                  <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
                    Alan Chikin Chow <img src="/images/verify.png" width={9} /> 4.2 views・22 hours ago
                  </p>
                  <p style={{ fontSize: "8.5px", color: "#b2b2b2" }}>
                    Hey Heroes, this is Alan Chikin Chow! Thanks for watching my video 😍 #Shorts 📩CONNECT WITH ME: IG:<br />
                    https://www.instagram.com/alanchikinchow EMAIL:alan@alanchikinchow.com
                  </p>
                </td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td width={150} height={160}></td>
                <td style={{verticalAlign:"middle"}}><img src="/images/clip5.png" width={240} /></td>
                <td width={455}>
                  <p style={{ fontSize: "13px" }}>
                    ฟังสดเดอะโกสเรดิโอ 24/3/2567 เรื่องเล่าผีเดอะโกส
                  </p>
                  <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
                    TheghostradioOfficial <img src="/images/verify.png" width={9} /> 495K views・Streamed 11 hours ago
                  </p>
                  <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
                    00:00:00 เปิดรายการ 28:49 สายที่ 1 คุณอ๊อด - ผีริมคลอง 50:45 สายที่ 2 คุณเอ - ผีห่าก้อมลิ...
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  );
}
