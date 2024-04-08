using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class Controller : MonoBehaviour
{
    [SerializeField] private GameObject gameController;
    [SerializeField] private GameObject theWall;
    [SerializeField] public LayerMask groundLayer;

	private float rotationSpeed = 100f;
    private float runningSpeed = 10f;
    private float walkingSpeed = 5f;
    private float jumpForce = 5f;
    private float jumpGravity = 1f;
    private float fallGravity = 1f;
    private float jumpHeight = 1f;

    private PlayerStats playerStats;
    private Rigidbody rb;
    private MapGenerator mapGenerator;
    private float horizontal;
    private float vertical;
    private float moveSpeed = 0f;
    private bool jump = false;
    private float gravityScale;
    private float theWallSpeed = 6.5f;

	private float metersTravelt = 0;
    private float metersTraveltThisFrame = 0;

    private float groundCheckRadius = 0.1f;

    private void Start()
    {
        mapGenerator = gameController.GetComponent<MapGenerator>();
        playerStats = GetComponent<PlayerStats>();

        rb = GetComponent<Rigidbody>();
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
    }

    private void Update()
    {
        horizontal = Input.GetAxis("Horizontal");
        vertical = Input.GetAxis("Vertical");

        RotateWithMouse();
        UpdateMoveSpeed();
        UpdateJumpAndGravity();

        metersTraveltThisFrame = mapGenerator.loadedSections[7].transform.position.z - metersTravelt;

        if (playerStats != null)
        {
            Debug.Log(metersTraveltThisFrame);
			playerStats.metersTravelt += metersTraveltThisFrame;
		}

        metersTravelt = mapGenerator.loadedSections[7].transform.position.z;
	}

    private void FixedUpdate()
    {
        Vector3 movementDirection = transform.rotation * new Vector3(horizontal, 0f, vertical).normalized * (moveSpeed * playerStats.speed);
        rb.MovePosition(rb.position + new Vector3(movementDirection.x, 0f, 0f) * Time.fixedDeltaTime);

        //if (theWall.transform.position.z <= 150 || theWallSpeed + movementDirection.z > 0)
        //{
        //    theWall.transform.position -= new Vector3(0f, 0f, theWallSpeed + movementDirection.z) * Time.fixedDeltaTime;
        //}

        foreach (GameObject section in mapGenerator.loadedSections)
        {
            section.transform.position -= new Vector3(0f, 0f, movementDirection.z) * Time.fixedDeltaTime;
        }

        if (jump)
        {
            jumpForce = Mathf.Sqrt(jumpHeight * -2 * (gravityScale * Physics.gravity.y));

            jump = false;
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }


        rb.AddForce((gravityScale - 1) * Physics.gravity * rb.mass);
    }
    private void RotateWithMouse()
    {
        float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
        Quaternion deltaRotation = Quaternion.Euler(Vector3.up * mouseX);
        rb.MoveRotation(rb.rotation * deltaRotation);
    }

    private void UpdateMoveSpeed()
    {
        if (Input.GetKey(KeyCode.LeftShift))
        {
            moveSpeed = runningSpeed;
        }
        else
        {
            moveSpeed = walkingSpeed;
        }

        if (horizontal != 0 && vertical != 0)
        {
            moveSpeed = moveSpeed / 2;
        }
    }

    private void UpdateJumpAndGravity()
    {
        if (Input.GetButtonUp("Jump") && IsGrounded())
        {
            jump = true;
        }

        if (rb.velocity.y > 0)
        {
            gravityScale = jumpGravity;
        }
        else if (rb.velocity.y < 0)
        {
            gravityScale = fallGravity;
        }
    }

    private bool IsGrounded()
    {
        Collider[] colliders = Physics.OverlapSphere(transform.position, groundCheckRadius, groundLayer);
        return colliders.Length > 0 ? true : false;
    }
}