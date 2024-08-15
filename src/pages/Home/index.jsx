import React from "react";
import NavBar from "../../components/childComponents/NavBar";
import "./style.scss";
import Transaction from "../../components/childComponents/Transaction";
import Contact from "../../components/childComponents/Contact";
import SearchInput from "../../components/childComponents/SearchInput";
import TextDisplaying from "../../components/childComponents/TextDisplaying";
import Invoices from "../../components/childComponents/ComponentsOfHome/Invoices";
import Icon from "../../assets/images/icon.png";
import Statistics from "../../components/childComponents/ComponentsOfHome/Invoices/Statistics";
import Tools from "../../components/childComponents/ComponentsOfHome/Invoices/Tools";

const Home = () => {
  return (
    <>
      <div className="text-input">
        <SearchInput customWidth={"85%"}></SearchInput>
      </div>

      <div className="Home">
        <div className="left">
          {/* section 2: required message */}
          <div className="info container-card">
            <div className="message">
              <div className="message-title">My Account</div>

              <div className="message_body">
                <TextDisplaying
                  textContent="Budget"
                  margin="0 10px 0 0"
                ></TextDisplaying>
                <TextDisplaying
                  textContent="Spending"
                  margin="0 10px 0 0"
                ></TextDisplaying>
                <TextDisplaying
                  textContent="Balance"
                  margin="0 10px 0 0"
                ></TextDisplaying>
              </div>
            </div>
          </div>

          {/* section 3: Balance */}
          <div className="balance-box container-card">
            <div className="header_card">
              <p className="title">Ho Van Hieu</p>

              <div className="child_logo">
                <span className="eazy">Eazy</span>
                <span className="pay">Pay</span>
              </div>
            </div>

            <p className="balance">$251.75</p>

            <div className="bottom_card">
              <div className="transfer-btn">
                2 0 1 2 * * * * * * * * 2 0 0 2
              </div>

              <img className="card_logo" src={Icon} alt="" />
            </div>
          </div>

          {/* section 4: Recent activity */}
          <p className="recent-activity-box container-card">
            <div className="title">Recent activity</div>
            <div className="transaction-container">
              <Transaction
                icon={"send"}
                name={"John Doe"}
                time={"18:30:20 Jun 30"}
                amount={"20.5"}
              />

              <Transaction
                icon={"send"}
                name={"Ho Van Hieu"}
                time={"12:25:52 Jun 29"}
                amount={"5.5"}
              />

              <Transaction
                icon={"repeat"}
                name={"Vu"}
                time={"10:20:05 Jun 23"}
                amount={"100.5"}
              />

              <Transaction
                icon={"repeat"}
                name={"Vu"}
                time={"10:20:05 Jun 23"}
                amount={"100.5"}
              />

              <Transaction
                icon={"repeat"}
                name={"Vu"}
                time={"10:20:05 Jun 23"}
                amount={"100.5"}
              />

              <Transaction
                icon={"repeat"}
                name={"Vu"}
                time={"10:20:05 Jun 23"}
                amount={"100.5"}
              />
            </div>
          </p>
        </div>

        {/* section 4: Recent activities */}
        <div className="right">
          {/* section 4: Contact */}
          {/* <div className="contact-box container-card">
            <div className="title">Contacts</div>
            <div className="contact-container">
              <Contact
                imageUrl={
                  "https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                }
                name={"Vu"}
              />
              <Contact
                imageUrl={
                  "https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                }
                name={"Hieu"}
              />
              <Contact
                imageUrl={
                  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                }
                name={"John"}
              />
            </div>
          </div> */}
          <Statistics> </Statistics>
          
          <Tools></Tools>
          
          {/* <div>
            <Invoices></Invoices>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
