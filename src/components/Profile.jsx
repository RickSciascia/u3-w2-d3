import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";

const Profile = function () {
  return (
    <Container>
      <title>Netflix - Edit Profile</title>
      <Row className="justify-content-center">
        <Col className="col-12 col-md-9-col-lg-6">
          <h1 className="text-white">Edit Profile</h1>
          <hr className="text-white" />
          <Container>
            <Row>
              <Col className="col-3">
                <div className="position-relative">
                  <a className="text-light" href="#">
                    <img
                      className="rounded-1 img-fluid "
                      style={{ maxHeight: "100" }}
                      src="/avatar.png"
                    />
                    <i className="position-absolute bottom-0 start-0 mx-1 bi-pencil-square"></i>
                  </a>
                </div>
              </Col>
              <Col className="col-9">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="rounded-0 w-75"
                      type="text"
                      placeholder="Strive Student"
                    />
                  </Form.Group>
                </Form>
                <h5 class="mt-3 text-white">Language:</h5>
                <Dropdown>
                  <Dropdown.Toggle
                    className="rounded-0 bg-transparent border border-white"
                    id="dropdown-profile"
                  >
                    Italiano
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                    <Dropdown.Item href="#">Español</Dropdown.Item>
                    <Dropdown.Item href="#">Français</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col className="col-3"></Col>
              <Col className="col-9">
                <hr className="text-white" />
                <h5 className="text-white">Maturity Settings:</h5>
                <Button className="fw-semibold rounded-0 bg-transparent border-white">
                  ALL MATURITY RATINGS
                </Button>
                <p class="my-2 text-white">
                  Show titles of
                  <span class="fw-semibold"> all maturity ratings</span> for
                  this profile.
                </p>
                <Button className="fw-semibold rounded-0 bg-transparent border-white">
                  EDIT
                </Button>
                <hr className="text-white" />
                <h5 class="my-2 text-white">Autoplay Controls</h5>
                <div class="form-check">
                  <input
                    class="form-check-input rounded-0"
                    type="checkbox"
                    id="autoPlayNext"
                  />
                  <label for="autoPlayNext" className="text-white">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input rounded-0"
                    type="checkbox"
                    id="autoPlayPreviews"
                  />
                  <label for="autoPlayPreviews" className="text-white">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <hr className="text-white" />
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-0 fw-semibold mx-2 px-3"
                    variant="light"
                  >
                    SAVE
                  </Button>
                  <Button className="rounded-0 border-white fw-semibold mx-2 px-3 bg-transparent">
                    CANCEL
                  </Button>
                  <Button className="rounded-0 border-white fw-semibold mx-2 px-3 bg-transparent">
                    DELETE PROFILE
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
