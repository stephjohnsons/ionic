<Alert show={show} variant="success">
        <Alert.Heading>Alert</Alert.Heading>
        <p>
          Please note that this project was inspired by 
          <a href="https://instagram.com/ui_shreyash">
            @ui_shreyash
          </a>
          , and is not intended for commercial purposes or sale. 
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>